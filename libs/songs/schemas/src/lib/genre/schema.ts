import { z } from 'zod';

/**
 * Genre schema
 *
 * @description
 * This schema is used to validate genre data.
 *
 * @example
 * import { genreSchema } from '@jukebox/genre/schema';
 *
 * const genre = {
 *  id: 1,
 *  name: 'House',
 * };
 *
 * const result = genreSchema.safeParse(genre);
 *
 * if (result.success) {
 *  console.log(result.data);
 * } else {
 *  console.log(result.error);
 * }
 *
 * @see https://zod.dev
 */
export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});
