import * as artistFixtures from '../artist';
import * as genreFixtures from '../genre';

// TEST ONLY
export const BASIC = {
  id: '33673515-6f28-11ed-bebe-022ed69f96e6',
  name: 'Tropicana',
  name_seo: 'tropicana',
  artist: artistFixtures.BASIC,
  artist_name: 'musicmakerjamofficial',
  duration: 274,
  bpm: 0,
  likes: 1,
  faves: 0,
  plays: 6,
  reposts: 0,
  comments: 0,
  description: 'Tropicana test song',
  tags: null,
  source_info: null,
  cover_image_path:
    'https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/335a647a-6f28-11ed-bebe-022ed69f96e6.jpeg?cb=20221128152317',
  cover_image_aspect_ratio: '1200:630',
  music_file_path:
    'https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/2bc3fc9b-6f28-11ed-bebe-022ed69f96e6.m4a?cb=20221128152317',
  music_file_mimetype: 'audio/mp4',
  song_genres: [genreFixtures.HOUSE, genreFixtures.WORLD],
  song_release: '2022-11-28T15:20:49+0100',
  mix_packs: [],
  linked_crews: [],
};
