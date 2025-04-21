import Joi from 'joi';

export const querySchema = Joi.object({
  filename: Joi.string().required(),
  width: Joi.number().integer().positive().required(),
  height: Joi.number().integer().positive().required(),
}).required();
