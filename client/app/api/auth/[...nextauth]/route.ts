import userLogin from "../../../../libs/auth/userLogin";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "../../../utils/authOption";

const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };