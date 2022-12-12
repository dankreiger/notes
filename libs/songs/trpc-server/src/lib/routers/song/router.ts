import { SongSchema, songSchema } from '@notes/songs/schemas';
import { z } from 'zod';
import { router } from '../../shared';
import { fetcher, getError } from '../../utils';
import { likeSongsProcedure, trendingSongsProcedure } from './internal';

export const songRouter = router({
  /**
   * Get trending songs
   *
   * GET: /song/trending => { songs: Song[] }
   */
  getTrending: trendingSongsProcedure.query<SongSchema[]>(
    async ({ ctx: { API_URL } }) => {
      try {
        return z.array(songSchema).parse(await fetcher(API_URL));
      } catch (err: z.ZodError | unknown) {
        throw getError(err);
      }
    }
  ),

  /**
   * Like a song
   *
   * POST: /song/trending (body) => { id: string }
   *
   */
  like: likeSongsProcedure.mutation(async ({ input, ctx }) => {
    try {
      const { API_URL, headers } = ctx;
      const res = await fetcher(API_URL, {
        method: 'POST',
        headers,
        body: new URLSearchParams(input).toString(),
      });

      console.log(res);
      return res;
    } catch (err: z.ZodError | unknown) {
      throw getError(err);
    }
  }),
});
