import React from 'react';
import { Link } from 'react-router-dom';

const link = {
  display: 'inline-block',
  padding: '1.1875rem 2.125rem 1.1875rem 2.125rem',
  border: '0.125rem solid #5f4dee',
  borderRadius: '2rem',
  backgroundColor: 'transparent',
  color: '#5f4dee',
  font: '700 0.875rem/0 "Open Sans", sans-serif',
  textDecoration: 'none',
  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '#5f4dee',
    color: '#fff',
    textDecoration: 'none',
  },
};

export default function LinkButton({ className, to, children }) {
  return (
    <Link className={className} css={link} to={to}>{children}</Link>
  );
}
