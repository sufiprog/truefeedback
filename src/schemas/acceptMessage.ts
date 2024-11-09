import { z } from 'zod';

export const acceptMessageSchma = z.object({
    acceptMessage: z.boolean(),
   })