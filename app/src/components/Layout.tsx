import React, {ReactNode} from 'react';
import {StatusBar, StatusBarProps, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import styled, {css} from '@emotion/native';
import {theme} from '../styles/theme';
import Header, {IHeaderOptions} from './Header';

interface ILayout {
  children: ReactNode;
  headerOptions?: IHeaderOptions;
  isEmptyBar?: boolean;
  backgroundColor?: string;
  statusBarProps?: StatusBarProps;
  isFullScreen?: boolean;
}

const Layout = ({
  children,
  headerOptions,
  isEmptyBar = false,
  backgroundColor,
  statusBarProps,
  isFullScreen = false,
}: ILayout) => {
  return (
    <StyledWrapper
      as={isFullScreen ? View : SafeAreaView}
      backgroundColor={backgroundColor}>
      <StatusBar
        backgroundColor={
          isFullScreen ? 'transparent' : theme.color.backgroundStatusBar
        }
        translucent
        barStyle="light-content"
        {...statusBarProps}
      />

      {isEmptyBar && <EmptyStatusBar />}
      {headerOptions &&
        (headerOptions.isHeader || headerOptions.headerTitle) && (
          <Header {...headerOptions} />
        )}

      <StyledContents>{children}</StyledContents>
    </StyledWrapper>
  );
};

export const EmptyBar = styled.View<{height?: number}>`
  height: ${(props) => (props.height ? props.height : 30)}px;
  background-color: transparent;
`;

export const EmptyStatusBar = () => {
  return <View style={{height: getStatusBarHeight()}} />;
};

export const EmptyBottomBar = styled.View`
  height: 70px;
`;

const StyledWrapper = styled.View<{
  backgroundColor?: string;
}>`
  flex: 1;
  ${(props) =>
    props.backgroundColor &&
    `
    background-color:${props.backgroundColor}
  `}
`;

const StyledContents = styled.View`
  flex: 1;
  background-color: ${theme.color.backgroundBody};
`;

export default Layout;
