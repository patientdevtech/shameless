import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    //Configure 1 or more authentication providers
    providers: [
        Providers.Facebook({
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
    //datagase: process.env.DATABASE_URL;
});