import React from 'react';
import { CommonButton } from './styles';

export const WithBgButton = ({text, isBg, width}) => {

  return <CommonButton width={width} isBg={isBg}>{text}</CommonButton>;
};
