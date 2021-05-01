import React from 'react';
import { Spinner, LockBody, ReleaseBody, Picture } from './styles/loading';

interface LoadingProps {
  src: string;
}

export default function Loading({ src, ...restProps }: LoadingProps) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
