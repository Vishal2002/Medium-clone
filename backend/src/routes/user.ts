import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import {signinInput, signupInput } from '@vishal2002/medium-clone'

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

userRouter.post('/signup', async (c) => {
  try {
    const body = await c.req.json();
    const parsedBody = signupInput.safeParse(body);

    if (!parsedBody.success) {
      return c.json({ error: parsedBody.error.issues }, 400);
    }

    const { username, email, password, name } = parsedBody.data;

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        name,
      }
    })

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt, message: "Signup Succesfully" });
  } catch (error) {
    c.status(411);
    return c.json({ error: "error while signing up" });
  }
})

userRouter.post('/login', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const parsedBody = signinInput.safeParse(body);

    if (!parsedBody.success) {
      return c.json({ error: parsedBody.error.issues }, 400);
    }

    const { usernameOrEmail, password } = parsedBody.data;

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: usernameOrEmail },
          { email: usernameOrEmail },
        ],
        password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt, message: "Login Succesfully" });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Error while signing in" }, 500);
  }
})