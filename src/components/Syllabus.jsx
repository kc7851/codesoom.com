import React from 'react';

const styles = {
  title: {
    margin: '0 0 30px 0',
  },
  container: {
    '&:not(:first-child)': {
      marginTop: '52px',
    },
  },
};

export default function Syllabus() {
  return (
    <section>
      <div css={styles.container}>
        <h3 css={styles.title}>강의 목표</h3>
        <div />
      </div>

      <div css={styles.container}>
        <h3 css={styles.title}>강의 목차</h3>
      </div>
    </section>
  );
}
