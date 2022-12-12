import { SongSchema } from '@notes/songs/schemas';
import { Reducer } from 'react';

type LikeCountReducer = Reducer<
  {
    [id: string]: number;
  },
  | {
      type: 'SET_LIKE_DICT';
      payload: SongSchema[];
    }
  | { type: 'UPDATE_LIKE_DICT'; payload: Record<string, number> }
>;

// post request isn't mutating like count,
//so we'll use a reducer to keep track of the like count
// for the session
export const likeCountReducer: LikeCountReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LIKE_DICT':
      return action.payload.reduce(
        (acc, song) => ({
          ...acc,
          [song.id]: song.likes,
        }),
        {}
      );
    case 'UPDATE_LIKE_DICT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
