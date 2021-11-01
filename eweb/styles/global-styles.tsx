import { Global, css } from "@emotion/react";
import { vw } from "./mixins";
import { theme } from "./theme";

const style = css`
  body,
  input,
  select,
  option,
  textarea,
  button {
    margin: 0;
    padding: 0;
    font-family: NotoSansKR, Apple SD Gothic Neo, "맑은 고딕", "Malgun Gothic",
      "나눔고딕", NanumGothic, "돋움", Dotum, "굴림", Gulim, sans-serif;
    ${vw("font-size", 14)}
    line-height: 1.25em;
    color: ${theme.color.default};
    font-weight: normal;
    -webkit-text-size-adjust: none;
  }

  body {
    background-color: ${theme.color.backgroundBody};
  }

  * {
    -khtml-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }

  table {
    width: 100%;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  // ios 플레이스 홀더 이슈
  .os-iOS.browser-Mobile-Safari {
    textarea {
      &:focus {
        &::placeholder {
          color: transparent;
        }
      }
    }
  }

  input[type="text"],
  input[type="button"],
  input[type="submit"],
  input[type="password"],
  input[type="search"],
  input[type="date"],
  input[type="time"],
  input[type="email"],
  input[type="number"],
  input[type="tel"],
  textarea {
    -webkit-appearance: none;
    border-radius: 0;
    box-sizing: border-box;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
    outline: none;
  }

  img.m {
    display: block;
  }

  img.pc {
    display: none;
  }

  i {
    font-style: normal;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: ${theme.color.main} !important;
  }

  /* swiper */
  :root {
    --swiper-theme-color: #007aff;
  }
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight,
  .swiper-container-autoheight .swiper-slide {
    height: auto;
  }
  .swiper-container-autoheight .swiper-wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }
  /* 3D Effects */
  .swiper-container-3d {
    perspective: 1200px;
  }
  .swiper-container-3d .swiper-wrapper,
  .swiper-container-3d .swiper-slide,
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom,
  .swiper-container-3d .swiper-cube-shadow {
    transform-style: preserve-3d;
  }
  .swiper-container-3d .swiper-slide-shadow-left,
  .swiper-container-3d .swiper-slide-shadow-right,
  .swiper-container-3d .swiper-slide-shadow-top,
  .swiper-container-3d .swiper-slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-top {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  .swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
  }
  /* CSS Mode */
  .swiper-container-css-mode > .swiper-wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
    display: none;
  }
  .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
    scroll-snap-align: start start;
  }
  .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: x mandatory;
  }
  .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
    scroll-snap-type: y mandatory;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms;
  }

  .swiper-container-fade {
    &.swiper-container-free-mode {
      .swiper-slide {
        transition-timing-function: ease-out;
      }
    }
    .swiper-slide {
      pointer-events: none;
      transition-property: opacity;
      .swiper-slide {
        pointer-events: none;
      }
    }
    .swiper-slide-active {
      &.swiper-slide-active {
        pointer-events: auto;
      }
    }
  }

  .os-Windows {
    .custom-window-scroll {
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        height: 3px;
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${theme.color.backgroundLight};
        opacity: 0.1;
        height: 3px;
        border-radius: 3px;
      }
      &::-webkit-scrollbar-track {
        background: none;
      }

      &.aside {
        &::-webkit-scrollbar {
          width: 3px;
          height: auto;
        }
        &::-webkit-scrollbar-thumb {
          width: 3px;
          height: auto;
        }
      }
    }
  }

  /* 
  body.os-ANDROID {
      font-size: 13px;
      font-weight: normal
  }

  body.os-ANDROID input,body.os-ANDROID select,body.os-ANDROID option,body.os-ANDROID textarea,body.os-ANDROID button {
      font-size: 13px
  }

  body.os-WINDOWS {
      font-size: 13px;
      letter-spacing: -0.5px
  }

  body.os-WINDOWS input,body.os-WINDOWS select,body.os-WINDOWS option,body.os-WINDOWS textarea,body.os-WINDOWS button {
      font-size: 13px;
      letter-spacing: -0.5px
  } */

  /* body.os-window {
      letter-spacing: -1px
  }

  body.os-window input,body.os-window select,body.os-window option,body.os-window textarea,body.os-window button {
      letter-spacing: -1px
  } */
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
