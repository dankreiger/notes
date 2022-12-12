import { songSchema } from './schema';
import * as fixtures from './schema.fixtures';

describe('songSchema', () => {
  describe('invalid', () => {
    test('empty object', () => {
      expect(songSchema.safeParse({}).success).toBe(false);
    });

    test('wrong property object', () => {
      const wrongProperty = {
        ...fixtures.BASIC,
        artist_name: 123,
      };
      expect(songSchema.safeParse(wrongProperty).success).toBe(false);
    });
  });

  describe('valid', () => {
    test('basic fixture', () => {
      expect(songSchema.safeParse(fixtures.BASIC).success).toBe(true);
    });
  });
});
