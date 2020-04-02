import React from 'react';

import Header from '../components/Header';
import Description from '../components/Description';
import Features from '../components/Features';
import Details from '../components/Details';
import Video from '../components/Video';

export default function Home() {
  return (
    <>
      <Header />
      <Description />
      <Features />
      <Details />
      <Video />
    </>
  );
}
