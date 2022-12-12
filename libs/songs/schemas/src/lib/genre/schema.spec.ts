import { genreSchema } from './schema';
import * as fixtures from './schema.fixtures';

describe('genreSchema', () => {
  describe('invalid', () => {
    test('empty object', () => {
      expect(genreSchema.safeParse({}).success).toBe(false);
    });

    test('wrong property object', () => {
      const wrongProperty = {
        ...fixtures.HOUSE,
        name: {},
      };
      expect(genreSchema.safeParse(wrongProperty).success).toBe(false);
    });
  });

  describe('valid', () => {
    test('HOUSE fixture', () => {
      expect(genreSchema.safeParse(fixtures.HOUSE).success).toBe(true);
    });

    test('WORLD fixture', () => {
      expect(genreSchema.safeParse(fixtures.WORLD).success).toBe(true);
    });
  });
});
