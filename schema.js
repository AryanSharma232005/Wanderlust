const Joi = require("joi");

/**
 * Defines the schema for the listing object itself, not the entire request body.
 * This is the standard and recommended approach.
 */
const listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.object({
      url: Joi.string().uri().allow(''),
      filename: Joi.string().allow('')
    }).optional()
}).required(); // .required() ensures that the listing object itself is not empty.

/**
 * Defines the schema for the review object directly.
 */
const reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required()
}).required(); // .required() ensures that the review object itself is not empty.

module.exports = {
  listingSchema,
  reviewSchema
};
