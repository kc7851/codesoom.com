import React, { useEffect } from 'react';

const background = 'https://d37fxmvwr7uuev.cloudfront.net/landing-bg.jpg';

const mobile = '@media (max-width: 576px)';

const styles = {
  chat: {
    position: 'fixed',
    right: '32px',
    bottom: '32px',
    zIndex: 2,
  },
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
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
  const apply = () => {
    alert('오픈 준비 중입니다. 카카오톡 채널로 문의를 남겨주시면 오픈 시 연락드리겠습니다 :)');
  };

  useEffect(() => {
    window.kakaoAsyncInit = function () {
      window.Kakao.Channel.createChatButton({
        container: '#kakao-talk-channel-add-button',
      });
    };

    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = '//developers.kakao.com/sdk/js/kakao.plusfriend.min.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'kakao-js-sdk'));
  }, []);

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
            리액트 편
          </strong>
        </div>

        {/* TODO Connect to https://www.wadiz.kr/web/campaign/detail/63768 */}
        <button css={styles.apply} type="button" onClick={apply}>
          신청하기
        </button>
      </div>

      <div
        css={styles.chat}
        id="kakao-talk-channel-add-button"
        data-channel-public-id="_xlgxiBxb"
        data-size="small"
        data-support-multiple-densities="true"
      />
    </>
  );
}
