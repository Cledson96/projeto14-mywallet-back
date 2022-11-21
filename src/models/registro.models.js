import joi from "joi";

export const registroSchema = joi.object({
    descricao: joi.string().required().min(1).max(30),
    valor: joi.number().required()
});
