/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SWRConfig} from 'swr';
import {fetcher} from '../core/fetcher';
import TestScreen from './screen/TestScreen';

const defaultSettings: {[name: string]: boolean} = {
  coutinuousPlay: true,
  allowedCellular: true,
  networkAuto: false,
};

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryInterval: 3000,
        errorRetryCount: 3,
        fetcher,
      }}>
      <>
        <TestScreen />
      </>
    </SWRConfig>
  );
};

export default App;
