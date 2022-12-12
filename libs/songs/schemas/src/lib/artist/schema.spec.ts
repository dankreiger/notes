import { artistSchema } from './schema';
import * as fixtures from './schema.fixtures';

describe('artistSchema', () => {
  describe('invalid', () => {
    test('empty object', () => {
      expect(artistSchema.safeParse({}).success).toBe(false);
    });

    test('wrong property object', () => {
      const wrongProperty = {
        ...fixtures.BASIC,
        artist_name: 123,
      };
      expect(artistSchema.safeParse(wrongProperty).success).toBe(false);
    });
  });

  describe('valid', () => {
    test('basic fixture', () => {
      expect(artistSchema.safeParse(fixtures.BASIC).success).toBe(true);
    });
  });
});
