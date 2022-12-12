import { AudioPlayer, Heading, Theme, ThemeVariant } from '@hear/shared/ui';
import { songsAppTrpcClient as trpc } from '@hear/songs/trpc-client';
import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useEffect, useReducer } from 'react';
import { getImageDimensions, likeCountReducer } from '../utils';
import styles from './index.module.css';

export function Index({ themeVariant }: { themeVariant: ThemeVariant }) {
  const { data: trendingSongs = [], error } = trpc.song.getTrending.useQuery();
  const { mutate: likeSong } = trpc.song.like.useMutation();

  const [likeDict, dispatch] = useReducer(likeCountReducer, {});

  useEffect(
    () =>
      dispatch({
        type: 'SET_LIKE_DICT',
        payload: trendingSongs,
      }),
    [trendingSongs]
  );

  if (error) return <div>{error.message}</div>;

  if (!trendingSongs) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.page}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
      >
        {trendingSongs.map((song) => (
          <li
            key={song.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow group"
          >
            <AudioPlayer
              src={song.music_file_path}
              duration={song.duration}
              header={
                <div className="h-full transform transition overflow-hidden flex justify-between items-center relative">
                  <Image
                    priority
                    className="rounded-md object-cover aspect-[4/3] transition-[transform] group-hover:scale-105"
                    src={song.cover_image_path}
                    alt={song.name}
                    {...getImageDimensions(song.cover_image_aspect_ratio)}
                  />
                  <div className="absolute flex flex-col items-center justify-end bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] p-5 text-white h-full w-full">
                    <Heading Tag="h5" color="text-white" className="mb-3">
                      {song.name}
                    </Heading>
                    <Heading Tag="h6" color="text-white">
                      {song.artist_name}
                    </Heading>
                  </div>
                </div>
              }
              footer={
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-5">
                      <HeartIcon className="w-5 h-5 mr-1" />
                      <div className="text-sm">{song.faves}</div>
                    </div>
                    <div className="flex items-center">
                      <ChatBubbleLeftIcon className="w-5 h-5 mr-1" />
                      <div className="text-sm">{song.comments}</div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className={`inline-flex items-center rounded-md border border-transparent ${Theme[themeVariant].button}  transition px-3 py-2 text-sm font-sm text-white shadow-sm focus:outline-none `}
                      onClick={() => {
                        likeSong({ id: song.id });
                        dispatch({
                          type: 'UPDATE_LIKE_DICT',
                          payload: { [song.id]: likeDict[song.id] + 1 },
                        });
                      }}
                    >
                      <HandThumbUpIcon
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      {/* {song.likes} // value isn't updating */}
                      {likeDict[song.id] || song.likes}
                    </button>
                  </div>
                </div>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
