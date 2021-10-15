import {useNavigation} from '@react-navigation/native';
import React from 'react';
import styled from '@emotion/native';
import {theme} from '../styles/theme';

export const ButtonBack = ({
  backEvent,
  white,
}: {
  backEvent?: () => void;
  white?: boolean;
}) => {
  const navigation = useNavigation();
  const handleClickBack = () => {
    if (backEvent) {
      backEvent();
    } else {
      navigation.goBack();
    }
  };
  const imageUrl = white
    ? require('../assets/images/btnBackWh.png')
    : require('../assets/images/btnBack.png');
  return (
    <StyledButtonBackWrapper onPress={handleClickBack} activeOpacity={1}>
      <StyledButtonBack source={imageUrl} />
    </StyledButtonBackWrapper>
  );
};

export const StyledButtonBackWrapper = styled.TouchableOpacity`
  width: ${theme.size.header}px;
  height: ${theme.size.header}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtonBack = styled.Image`
  width: 17px;
  height: 15px;
`;
