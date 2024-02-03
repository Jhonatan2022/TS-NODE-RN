import { z } from 'zod'

const createTaskSchema = z.object({
  title: z.string({
    required_error: 'Title is required'
  }),
  description: z
    .string({
      required_error: 'Description is required'
    })
    .optional(),
  date: z
    .string({
      required_error: 'Date is required'
    })
    .datetime()
    .optional()
})
