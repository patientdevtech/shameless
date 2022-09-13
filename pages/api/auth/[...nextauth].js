import NextAuth from "next-auth";
// import Providers from "next-auth/providers/facebook";
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
    //Configure 1 or more authentication providers
    providers: [
        // Providers({
        //     clientId: process.env.REACT_APP_FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.REACT_APP_FACEBOOK_CLIENT_SECRET,
        // }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    //ADD MORE PROVIDERS HERE...EXAMPLE:
        // Providers.GitHub({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        //     }),
        // MORE AT next-auth.js.org - add api route
    ],

    //a database is optional, but required to persist accounts in a database
    // database: process.env.REACT_APP_DATABASE_URL;
});