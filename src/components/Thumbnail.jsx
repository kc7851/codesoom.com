import React from 'react';

const styles = {
  thumbnail: {
    flexShrink: 0,
    width: '270px',
    border: '1px solid #e1e4e8',
    borderRadius: '3px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  expand: {
    paddingBottom: '100%',
  },
};

export default function Thumbnail({ url }) {
  return (
    <div
      css={styles.thumbnail}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div css={styles.expand} />
    </div>
  );
}
