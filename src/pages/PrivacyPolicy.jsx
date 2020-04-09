import React from 'react';

import MainHeader from '../components/MainHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import MainContent from '../components/MainContent';
import TextContainer from '../components/TextContainer';
import LinkButton from '../components/LinkButton';
import Container from '../components/Container';

import privacyPolicies from '../assets/documents/privacy-policies';

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

export default function PrivacyPolicy() {
  return (
    <>
      <MainHeader>개인정보 처리방침</MainHeader>

      <Breadcrumbs>개인정보 처리방침</Breadcrumbs>

      <MainContent>
        <Container>
          {privacyPolicies.map(({ head, body }, index) => (
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

      <Breadcrumbs>개인정보 처리방침</Breadcrumbs>
    </>
  );
}
