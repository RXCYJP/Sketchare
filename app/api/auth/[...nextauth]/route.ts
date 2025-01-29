import logIn from "@/services/auth/service";

import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const authOption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "naruto123",
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "username", type: "text" },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const user: any = await logIn(username, password);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "credentials") {
        token.id = user.id;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      if (token.id) {
        session.user.id = token.id;
      }
      if (session.user.role === "siswa") {
        session.user.kelas = token.kelas;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
