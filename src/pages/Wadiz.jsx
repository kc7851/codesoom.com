import React from 'react';

import background from '../images/landing-bg.jpg';

const mobile = '@media (max-width: 576px)';

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  dim: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  logo: {
    fontFamily: 'Pacifico',
    fontSize: '62px',
    color: 'white',
    zIndex: 2,
    [mobile]: {
      fontSize: '36px',
    },
  },
  title: {
    fontFamily: 'Noto Sans KR',
    fontSize: '78px',
    color: 'white',
    marginTop: '46px',
    lineHeight: '92px',
    textAlign: 'center',
    zIndex: 2,
    strong: {
      fontSize: '82px',
    },
    [mobile]: {
      fontSize: '28px',
      lineHeight: '46px',
      marginTop: '36px',
      strong: {
        fontSize: '32px',
      },
    },
  },
  apply: {
    fontFamily: 'Noto Sans KR',
    background: '#fd3844',
    border: 0,
    color: 'white',
    width: '300px',
    height: '90px',
    fontSize: '32px',
    marginTop: '60px',
    zIndex: 2,
    cursor: 'pointer',
    [mobile]: {
      width: '160px',
      height: '60px',
      fontSize: '20px',
      marginTop: '42px',
    },
  },
};
export default function Lading() {
  return (
    <>
      <div css={styles.container}>
        <div css={styles.dim} />

        <div css={styles.logo}>CodeSoom</div>

        <div css={styles.title}>
          코딩의 신 아샬의
          <br />
          <strong>
            소프트웨어 개발의 지혜
            <br />
            리액트편
          </strong>
        </div>

        <button css={styles.apply} type="button">신청하기</button>
      </div>
    </>
  );
}
