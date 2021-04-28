import React from 'react';
import { firebaseCollections } from '../constants/firebaseCollections';
import useContent from '../hooks/useContent';

// TODO: 4:58:07

export default function BrowsePage() {
  const { series } = useContent(firebaseCollections.series);
  const { films } = useContent(firebaseCollections.films);
  console.log(series);
  return <div></div>;
}
