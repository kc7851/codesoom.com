import React from 'react';

const styles = {
  pre: {
    marginTop: '1rem',
    whiteSpace: 'pre-wrap',
  },
};

export default function TextContainer({ className, head, body }) {
  return (
    <div className={className}>
      <h3>{head}</h3>

      <div css={styles.pre}>{body}</div>
    </div>
  );
}
