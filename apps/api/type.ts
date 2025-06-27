

import { z } from "zod"

export const createSignupSchema = z.object({
    username: z.string().min(4).max(40).email(),
    password: z.string().min(8).max(40)
})

export const createSigninSchema = z.object({
    username : z.string().min(4).max(40),
    password : z.string().min(8).max(40)
})