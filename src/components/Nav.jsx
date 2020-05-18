import React from 'react';
import { useLocation } from 'react-router-dom';

import NormalNav from './NormalNav';
import LectureNav from './LectureNav';

export default function Nav() {
  const location = useLocation();

  const isLecturePage = () => /courses\/[0-9]+\/lectures\/[0-9]+/.test(location.pathname);

  return isLecturePage() ? <LectureNav /> : <NormalNav />;
}
