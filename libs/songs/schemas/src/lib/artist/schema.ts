import { z } from 'zod';
import { genreSchema } from '../genre';

/**
 * Artist schema
 *
 * @description
 * This schema is used to validate artist data.
 *
 * @example
 * import { artistSchema } from '@jukebox/artist/schema';
 *
 * const invalidArtist = {
 *  id: '1',
 *  name: 'House',
 * }
 *
 * const result = artistSchema.safeParse(invalidArtist);
 *
 * @see https://zod.dev
 */
export const artistSchema = z.object({
  id: z.string(),
  name: z.string(),
  artist_name: z.string(),
  muted: z.boolean(),
  place: z.any().nullable(),
  country: z.string().nullable(),
  followers: z.number(),
  follows: z.number(),
  liked: z.number(),
  releases: z.number(),
  favorites: z.number(),
  description: z.string().nullable(),
  profile_image_path: z.string(),
  cover_image_path: z.string(),
  favorite_genres: z.array(genreSchema),
  created: z.string(),
  location: z.string().nullable(),
  social_accounts: z.array(z.any()),
  video_shout_out_count: z.number(),
  external_songs_count: z.number().nullable(),
  external_videos_count: z.number(),
  crews: z.array(z.unknown()),
});
