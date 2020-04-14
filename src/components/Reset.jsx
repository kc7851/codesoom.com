import React from 'react';

import { Global, css } from '@emotion/core';

export default function Reset() {
  return (
    <Global
      styles={css`
        #app {
          height: 100%;
        }
        html {
          height: 100%;
        }
        body {
          height: 100%;
          margin: 0;
        }
      `}
    />
  );
}
