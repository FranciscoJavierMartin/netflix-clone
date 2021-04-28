import React from 'react';
import useContent from '../hooks/useContent';

export default function BrowsePage() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  return <div></div>;
}
