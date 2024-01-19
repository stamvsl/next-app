import NextAuth, { NextAuthOptions } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions = {
  session: {
    strategy: "jwt",
  },
  // providers: [
  //   CredentialsProvider({
  //     type: "credentials",
  //     credentials: {},
  //     authorize(credentials, req) {
  //       const { email, password } = credentials;
  //       if (email !== "john@gmail.com" || password !== "1234") {
  //         throw new Error("Invalid credentials");
  //       }
  //       return { id: "1234", name: "John Doe", email: "john@gmail.com", role: "admin" };
  //     },
  //   }),
  // ],

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
    jwt(params) {
      if (params.user?.role) {
        params.token.role = params.user.role;
      }

      return params.token;
    },
  },
};

export default NextAuth(authOptions);