import joi from "joi";

export const cadastroSchema = joi.object({
    name: joi.string().required().min(1).max(100),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: joi.string().min(3).required().email()
});

