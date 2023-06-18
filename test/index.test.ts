import { Packagist } from '../src/index';

test('init', () => {
  expect(new Packagist('test').init()).toBe('test');
});
