const { z, object } = require('zod');

const signUpSchema = z.object({
    name:z
    .string({required_error:"Name is require"})
    .trim()
    .min(3,{message:"Name must be al least of 3 chars"})
    .max(255,{message:"Name not more than 255 character"}),

    description:z
    .string({required_error:"dec is require"})
    .trim()
    //.email({message:"invalid email address"})
    .min(10,{message:"dec must be al least of 10 chars"})
    .max(255,{message:"dec not more than 255 character"}),



});

module.exports = signUpSchema