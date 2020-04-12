import React from 'react';

import { Global, css } from '@emotion/core';

import Pacifico from '../assets/fonts/Pacifico-Regular.ttf';
import NotoSansBold from '../assets/fonts/NotoSansKR-Medium.otf';
import NotoSansRegular from '../assets/fonts/NotoSansKR-Regular.otf';

export default function Reset() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }
        @font-face {
          font-family: 'Pacifico';
          src: url(${Pacifico});
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          src: url(${NotoSansRegular});
        }
        @font-face {
          font-family: 'Noto Sans KR';
          font-style: bold;
          font-weight: 700;
          src: local('Noto Sans KR Regular'), local('NotoSansKR-Regular'), url(${NotoSansBold});
        }
      `}
    />
  );
}
