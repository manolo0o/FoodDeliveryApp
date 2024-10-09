const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../adapters/database/User.cjs');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: '/auth/discord/redirect',
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ correo: profile.email }).then(currentUser => {
        if (currentUser) {
            done(null, currentUser);
        } else {
            new User({
                nombre: profile.username,
                correo: profile.email,
                contraseña: process.env.KEY_SECRET
            }).save().then(newUser => {
                done(null, newUser);
            });
        }
    });
    
}));

// Estrategia de GitHub
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/redirect',
    scope: ['user:email']
}, (accessToken, refreshToken, profile, done) => {
    
    const email = profile.emails[0].value
    User.findOne({ correo: email }).then(currentUser => {
        if (currentUser) {
            done(null, currentUser);
        } else {
            
            new User({
                nombre: profile.displayName,
                correo: email,
                contraseña: process.env.KEY_SECRET
            }).save().then(newUser => {
                done(null, newUser);
            });
        }
    });
}));



// Estrategia de Google
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
    scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value;

    User.findOne({ correo: email }).then(currentUser => {
        if (currentUser) {
            done(null, currentUser);
        } else {
            new User({
                nombre:  profile.displayName,
                correo: email,
                contraseña: process.env.KEY_SECRET
            }).save().then(newUser => {
                done(null, newUser);
            });
        }
    });
}));