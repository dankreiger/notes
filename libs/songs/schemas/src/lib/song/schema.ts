import { z } from 'zod';

/**
 * Song schema
 *
 * @description
 * This schema is used to validate song data.
 *
 * @example
 * import { songSchema } from '@jukebox/song/schema';
 *
 * const invalidSong = {
 *  id: '1',
 *  name: 'House',
 * }
 *
 * const result = songSchema.safeParse(invalidSong);
 *
 * @see https://zod.dev
 */
export const songSchema = z.object({
  id: z.string(),
  name: z.string(),
  name_seo: z.string(),
  // artist: artistSchema,
  artist_name: z.string(),
  duration: z.number(),
  bpm: z.number(),
  likes: z.number(),
  faves: z.number(),
  plays: z.number(),
  reposts: z.number(),
  comments: z.number(),
  description: z.string().nullable(),
  tags: z.any().optional(),
  source_info: z.string().nullable(),
  cover_image_path: z.string(),
  cover_image_aspect_ratio: z.string(),
  music_file_path: z.string(),
  music_file_mimetype: z.string(),
  // song_genres: z.array(genreSchema),
  song_release: z.string(),
  mix_packs: z.array(z.any()),
  linked_crews: z.array(z.any()),
});

export type SongSchema = z.infer<typeof songSchema>;
