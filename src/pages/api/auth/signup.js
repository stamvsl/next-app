import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function signup(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        // Add other user details as necessary
      },
    });

    return res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    return res.status(500).json({ message: "Error creating user", error });
  }
}
