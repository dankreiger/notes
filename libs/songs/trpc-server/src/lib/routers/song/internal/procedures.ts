import { z } from 'zod';
import { procedure } from '../../../shared';
import { likeSongsMiddleware, trendingSongsMiddleware } from './middleware';

export const trendingSongsProcedure = procedure.use(trendingSongsMiddleware);
export const likeSongsProcedure = procedure.use(likeSongsMiddleware).input(
  z.object({
    id: z.string(),
  })
);
