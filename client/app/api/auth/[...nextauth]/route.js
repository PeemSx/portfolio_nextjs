import userLogin from "../../../../libs/auth/userLogin";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";


const  authOptions = {

  providers: [
    CredentialsProvider({

      name: 'credentials',
      credentials: {
        email : {label: "Email", type : "email" , placeholder : "email"},
        password : {label: "password", type : "password"}
      },
      async authorize(credentials, req) {

        const user = await userLogin(credentials.email,credentials.password);
       
        if ( user) {
          return user
        }

        return null
      }
    })
  ],
  session:{ strategy: "jwt" },
  callbacks:{
    async jwt({token, user}){
      return {...token, ...user}
    },
    async session({session, token, user}){
      session.user = token 
      return session
    }
  },
  secret : process.env.NEXTAUTH_SECRET,
  pages:{
    signIn : "/login"
  }
  

}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };