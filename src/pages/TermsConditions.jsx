import React from 'react';

import MainHeader from '../components/MainHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import MainContent from '../components/MainContent';
import TextContainer from '../components/TextContainer';
import LinkButton from '../components/LinkButton';
import Container from '../components/Container';

import termsConditions from '../assets/documents/terms-conditions';

const styles = {
  buttonMargin: {
    marginTop: '1.75rem',
  },
  textContainerMargin: {
    '&:not(:first-child)': {
      marginTop: '3.625rem',
    },
  },
};

export default function TermsConditions() {
  return (
    <>
      <MainHeader>이용약관</MainHeader>

      <Breadcrumbs>이용약관</Breadcrumbs>

      <MainContent>
        <Container>
          {termsConditions.map(({ head, body }, index) => (
            <TextContainer
              css={styles.textContainerMargin}
              key={index}
              head={head}
              body={body}
            />
          ))}

          <LinkButton css={styles.buttonMargin} to="/">Back</LinkButton>
        </Container>
      </MainContent>

      <Breadcrumbs>이용약관</Breadcrumbs>
    </>
  );
}
