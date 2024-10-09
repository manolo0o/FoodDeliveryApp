const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const { GoogleUser, FacebookUser, DiscordUser } = require("../models/userModel.cjs")

module.exports = function(passport) {

    //Google

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await GoogleUser.findOne({ oauthID: profile.id });
            if (user) {
                return done(null, user);
            }
            const newUser = await new GoogleUser({
                oauthID: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                picture: profile._json.picture
            }).save();
            done(null, newUser);
        } catch (error) {
            done(error, null);
        }
    }));
    

    //Facebook

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'emails', 'name', 'picture.type(large)']
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await FacebookUser.findOne({ oauthID: profile.id });
        if (user) {
            return done(null, user);
        }
        const newUser = await new FacebookUser({
            oauthID: profile.id,
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            picture: profile._json.picture.data.url
        }).save();
        done(null, newUser);
    }));

    //Discord

    passport.use(new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: '/auth/discord/callback',
        scope: ['identify', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await DiscordUser.findOne({ oauthID: profile.id });
        if (user) {
            return done(null, user);
        }
        const newUser = await new DiscordUser({
            oauthID: profile.id,
            name: profile.username,
            email: profile.email,
            picture: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : ''
        }).save();
        done(null, newUser);
    }));
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await GoogleUser.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
}