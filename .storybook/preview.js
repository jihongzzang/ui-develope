import '../src/styles/globals.css';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'light',
        value: '#F4F6FA',
      },
      {
        name: 'dark',
        value: '#444',
      },
    ],
  },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <Story />
    </CacheProvider>
  ),
];
