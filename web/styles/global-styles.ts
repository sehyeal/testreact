/*
    css 초기화 및 공통 스타일 정의
*/

import reset from "stitches-reset";
import { globalCss, theme } from "./stitches.config";

const GlobalStyle = globalCss({
  reset,
  body: {
    margin: 0,
    padding: 0,
    // fontStyle: "NotoSansKR, Apple SD Gothic Neo, '맑은 고딕', 'Malgun Gothic', '나눔고딕', NanumGothic, '돋움', Dotum, '굴림', Gulim, sans-serif",
    fontSize: '${vw("font-size", 54)}',
    lineHeight: "1.25em",
    color: theme.colors.default,
    fontWeight: "normal",
  },
});

export default GlobalStyle;
