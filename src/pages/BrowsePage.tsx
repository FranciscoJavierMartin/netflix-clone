import React from 'react';
import { firebaseCollections } from '../constants/firebaseCollections';
import useContent from '../hooks/useContent';
import selectionMap from '../utils/selectionMap';

export default function BrowsePage() {
  const { series } = useContent(firebaseCollections.series);
  const { films } = useContent(firebaseCollections.films);
  const slides = selectionMap(series, films);
  return <div></div>;
}
