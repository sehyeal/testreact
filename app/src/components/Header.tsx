import React from 'react';

import styled, {css} from '@emotion/native';
import {theme} from '../styles/theme';
import {ButtonBack} from './Buttons';

export interface IHeaderOptions {
  headerTitle?: string;
  isBack?: boolean;
  isHeader?: boolean;
  backEvent?: () => void;
  transparent?: boolean;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  bg?: string;
}

const Header = ({
  headerTitle,
  isHeader = true,
  transparent,
  leftComponent,
  rightComponent,
  bg,
}: IHeaderOptions) => {
  if (!isHeader) {
    return null;
  }
  return (
    <HeaderBar bg={bg} transparent={transparent}>
      <HeaderLeft>{leftComponent ? leftComponent : <ButtonBack />}</HeaderLeft>

      {headerTitle && <HeaderTitle>{headerTitle}</HeaderTitle>}
      <HeaderRight>{rightComponent && rightComponent}</HeaderRight>
      {headerTitle && !rightComponent && (
        <>
          <EmptyView />
        </>
      )}
    </HeaderBar>
  );
};

const HeaderBar = styled.View<{transparent?: boolean; bg?: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: ${theme.size.header}px;
  background-color: ${(props) => (props.bg ? props.bg : '#252525')};
  ${(props) =>
    props.transparent &&
    `
  background-color : transparent;
  `}
`;

const HeaderLeft = styled.View`
  flex: 1;
`;
const HeaderRight = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const EmptyView = styled.View``;

export default Header;
