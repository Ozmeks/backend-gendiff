import { test, expect } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compareJson from '../src/compare-json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const expectedResult = readFile('expected_file.txt').toString();
const result = compareJson(getFixturePath('file1.json'), getFixturePath('file2.json'));

test('gendiff flat JSONs', () => {
  expect(result).toBe(expectedResult);
});
