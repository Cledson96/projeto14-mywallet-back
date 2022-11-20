import joi from "joi";

export const registroSchema = joi.object({
    descricao: joi.string().required().min(1).max(100),
    valor: joi.number().required()
});
