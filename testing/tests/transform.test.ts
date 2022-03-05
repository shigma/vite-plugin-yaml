import { test, expect } from 'vitest';
import PersonYAMLMock from './__mocks__/example.yaml';

test('Transform YAML to JSON', () => {
  expect(PersonYAMLMock).toStrictEqual({
    "123": true,
    "name": "Lin",
    "id": 3425,
    "metadata": {
      "isActive": true,
      "role": "user"
    },
    "😁": "happy",
    "interests": [
      "music",
      "movies",
      "hyperpop",
      "VR",
      "tea"
    ]
  });
});