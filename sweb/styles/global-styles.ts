/*
    css 초기화 및 공통 스타일 정의
*/

import reset from "stitches-reset";
import { globalCss } from "./stitches.config";

const GlobalStyle = globalCss({
  reset,
});

export default GlobalStyle;
