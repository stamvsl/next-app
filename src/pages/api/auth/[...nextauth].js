import NextAuth, { NextAuthOptions } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || user.password !== credentials.password) {
          throw new Error("Invalid credentials");
        }

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error",
    // signOut: "/auth/signout"
  },
  callbacks: {
    async jwt({ token, user }) {
      // user object is only available on initial signin
      if (user) {
        token.id = user.id; // Add the user's ID to the JWT token
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id; // Add the user's ID to the session
      return session;
    },
  },
};

export default NextAuth(authOptions);
