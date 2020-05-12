import React from 'react';

const styles = {
  header: {
    backgroundColor: '#5f4dee',
    padding: '166px 0 136px 0',
  },
  title: {
    textAlign: 'center',
    fontSize: '46px',
    lineHeight: '56px',
  },
  price: {
    fontSize: '30px',
    lineHeight: '45px',
    marginTop: '8px',
  },
  container: {
    maxWidth: '1140px',
    margin: 'auto',
    color: 'white',
  },
};

function CourseHeader() {
  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <div css={styles.title}>
          코딩의 신 아샬의 소프트웨어 개발의 지혜 &lt;리액트 편&gt;
        </div>
      </div>

    </header>
  );
}

export default CourseHeader;
