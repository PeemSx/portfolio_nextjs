
import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "../../../../libs/auth/userLogin";

export const  authOptions : AuthOptions= {
  pages:{
    signIn : "/login"
  },
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
      return {...token, ...user};
    },
    async session({session, token, user}){
      session.user = token as any
      return session;
    }
  },
  secret : process.env.NEXTAUTH_SECRET


}


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };