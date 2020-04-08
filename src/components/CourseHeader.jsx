import React from 'react';

const styles = {
  header: {
    backgroundColor: '#5f4dee',
    padding: '236px 0 186px 0',
  },
  title: {
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
}

function CourseHeader() {
  return (
    <header css={styles.header}>
      <div css={styles.container}>
        <div css={styles.title}>
          아샬의 리액트 박살내기
        </div>

        <div css={styles.price}>
          1,500,000원
        </div>
      </div>
    </header>
  );
}

export default CourseHeader;
