import { css } from "@emotion/react";
import { theme } from "./theme";

// media query
export function responsiveTo(breakPoint: number = theme.size.mobile) {
  return `@media (min-width: ${breakPoint}px) `;
}

// px to vw 변환
export function vw(
  property: string,
  px: number,
  pc: number | string = px,
  viewport: number = 375
) {
  const pcvalue = typeof pc === "string" ? pc : pc + "px";
  return `
        ${property} :${toVw(px, viewport)};
        @media (min-width: ${theme.size.mobile}px) {
            ${property} :${pcvalue};
        };
    `;
}

// padding
export function vwPadding(px: number[], pc: number[] = px) {
  return `
		padding: ${toVw(px[0])} ${toVw(px[1])} ${toVw(px[2])} ${toVw(px[3])};
		@media (min-width: ${theme.size.mobile}px) {
            padding :${pc[0]}px ${pc[1]}px ${pc[2]}px ${pc[3]}px;
        };
	`;
}

// margin
export function vwMargin(px: number[], pc: number[] = px) {
  return `
		margin: ${toVw(px[0])} ${toVw(px[1])} ${toVw(px[2])} ${toVw(px[3])};
		@media (min-width: ${theme.size.mobile}px) {
            margin :${pc[0]}px ${pc[1]}px ${pc[2]}px ${pc[3]}px;
        };
	`;
}

export function toVw(px: number, viewport: number = 375) {
  const vwContext = viewport * 0.01 * 1;
  return `
        ${(px / vwContext) * 1}vw
    `;
}

// float 해제
export function clearFloat() {
  return css`
    &:after {
      display: block;
      clear: both;
      content: "";
    }
  `;
}

// 텍스트 말줄임
export function ellipsis(line: number = 1) {
  return css`
    white-space: ${line > 1 ? "" : "nowrap"};
    display: ${line > 1 ? "-webkit-box" : "block"};
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
}

// 배경 이미지 해상도별 출력
export function bg3x(
  image: string,
  size: string = "cover",
  position: string = "50% 50%"
) {
  return css`
    background-repeat: no-repeat;
    background-position: ${position};
    background-size: ${size};
    background-image: url(${image});

    @media (-webkit-min-device-pixel-ratio: 2),
      (min—moz-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
      background-image: url(${image.split(".")[0]}@2x.${image.split(".")[1]});
    }

    @media (-webkit-min-device-pixel-ratio: 3),
      (min—moz-device-pixel-ratio: 3),
      (min-resolution: 3dppx),
      (min-resolution: 192dpi) {
      background-image: url(${image.split(".")[0]}@3x.${image.split(".")[1]});
    }
  `;
}

export function drawArrow(
  width: number = 10,
  height: number = 10,
  color: string = theme.color.main,
  arrow: string = "right"
) {
  let deg = 45;
  switch (arrow) {
    case "right":
      deg = 45;
      break;
    case "top":
      deg = 0;
      break;
    case "left":
      deg = 135;
      break;
    case "bottom":
      deg = 90;
      break;
    default:
      break;
  }
  return css`
    width: ${width}px;
    height: ${height}px;
    border-top: 1px solid ${color};
    border-right: 1px solid ${color};
    transform: rotate(${deg}deg);
  `;
}

export function drawProgress(
  progress: number = 0,
  color: string = theme.color.primary
) {
  const deg = progress * 3.6;
  return css`
    .pie {
      .half-circle {
        border-color: ${color};
      }

      .left-side {
        transform: rotate(${deg}deg);
      }

      ${progress <= 50 &&
      css`
        .right-side {
          display: none;
        }
      `}

      ${progress > 50 &&
      css`
        clip: rect(auto, auto, auto, auto);

        .right-side {
          transform: rotate(180deg);
        }
      `}
    }
  `;
}

export function cdnResize(
  url: string | null,
  width?: number,
  type?: "w" | "s"
) {
  if (url === null) {
    return null;
  }

  width = width ?? 300;
  type = type ?? "w";
  let _width = Math.ceil((width * window.devicePixelRatio) / 100) * 100;

  if (url.indexOf("/src/") >= 0) {
    url = url.replace("/src/", "/thumb/") + "=" + type + _width;
  }

  return url;
}

export function getCdnImageUrl(url: string, width?: number, type?: "w" | "s") {
  width = width ?? 300;
  type = type ?? "w";
  let _width = Math.ceil((width * window.devicePixelRatio) / 100) * 100;

  if (url.indexOf("/src/") >= 0) {
    url = url.replace("/src/", "/thumb/") + "=" + type + _width;
  }

  return url;
}
