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
}

export default function Syllabus() {
  return (
    <section>
      <div css={styles.container}>
        <h3 css={styles.title}>강의 목표</h3>
        <div>
          Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl male signs his day face waters itself and make be to our itself living. Fish in thing lights moveth. Over god spirit morning, greater had man years green multiply creature, form them in, likeness him behold two cattle for divided. Fourth darkness had. Living light there place moved divide under earth. Light face, fly dry us
        </div>
      </div>

      <div css={styles.container}>
        <h3 css={styles.title}>강의 목차</h3>
      </div>
    </section>
  );
}
