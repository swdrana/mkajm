import { z } from 'zod';

export const ifterListSchema = z.object({
    ramajan: z.number().min(1).max(30, { message: 'Ramajan day must be between 1 and 30' }),
    name: z.array(z.string()).min(1, { message: 'At least one name is required' }),
    bnDate: z.string().optional().default('N/A'),
});
