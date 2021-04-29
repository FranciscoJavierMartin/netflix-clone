import React from 'react';
import { firebaseCollections } from '../constants/firebaseCollections';
import BrowseContainer from '../containers/BrowseContainer';
import useContent from '../hooks/useContent';
import selectionMap from '../utils/selectionMap';

export default function BrowsePage() {
  const { series } = useContent(firebaseCollections.series);
  const { films } = useContent(firebaseCollections.films);
  const slides = selectionMap(series, films);
  return <BrowseContainer slides={slides} />;
}
