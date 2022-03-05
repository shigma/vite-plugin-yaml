import { test, expect } from 'vitest';
import ViteYAML from '../../../src/index';
import PersonYAMLMock from './__mocks__/Person';

test('Transform YAML to JSON', async () => {
  const trans = await ViteYAML().transform(PersonYAMLMock, 'Person.yaml');

  expect(trans).toStrictEqual({
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