import React from 'react';

import ReactMarkdown from 'react-markdown';

import ReactIntro from '../assets/documents/intro-react.md';

const styles = {
  container: {
    maxWidth: '1024px',
    padding: '64px 16px',
    margin: 'auto',
  },
};

export default function Syllabus() {
  return (
    <section css={styles.container}>
      <ReactMarkdown escapeHtml={false} source={ReactIntro} />
      <button type="button">
        수강하기
      </button>
    </section>
  );
}
