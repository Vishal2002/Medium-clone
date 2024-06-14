import z from "zod";

export const signupInput =z.object({
    username:z.string(),
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string().min(6),
})

export const signinInput =z.object({
  usernameOrEmail: z.string(),
  password: z.string(),
})

export const blogInput =z.object({
    title:z.string(),
    content:z.string(),
    thumbnail:z.string()
})

export const updateblogInput =z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})


export type SignupInput = z.infer<typeof signupInput>;
export type BlogInput = z.infer<typeof blogInput>;
export type UpdateBlog=z.infer<typeof updateblogInput>
export type SigninInput=z.infer<typeof signinInput>;