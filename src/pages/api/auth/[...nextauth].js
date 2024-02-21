import NextAuth, { NextAuthOptions } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          // Passwords match
          return { id: user.id, name: user.name, email: user.email };
        } else {
          // User not found or passwords don't match
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error",
    // signOut: "/auth/signout"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.id) {
        session.user.id = token.id;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
