import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers:[
        GitHubProvider({
            clientId:process.env.NEXT_API_GITHUB_ID,
            clientSecret:process.env.NEXT_API_GITHUB_SECRET,
        })
    ],
})