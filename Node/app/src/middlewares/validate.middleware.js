export const validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync(req.body)
    next()
  } catch (error) {
    res
      .status(400)
      .json(error.errors.map((error) => error.message))
  }
}
