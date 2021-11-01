import { theme } from "./stitches.config";

// media query
export function responsiveTo(breakPoint: number) {
  return `@media (min-width: ${
    breakPoint ? breakPoint : theme.sizes.mobile
  }px) `;
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
        @media (min-width: ${theme.sizes.mobile}px) {
            ${property} :${pcvalue};
        };
    `;
}

// padding
export function vwPadding(px: number[], pc: number[] = px) {
  return `
		padding: ${toVw(px[0])} ${toVw(px[1])} ${toVw(px[2])} ${toVw(px[3])};
		@media (min-width: ${theme.sizes.mobile}px) {
            padding :${pc[0]}px ${pc[1]}px ${pc[2]}px ${pc[3]}px;
        };
	`;
}

// margin
export function vwMargin(px: number[], pc: number[] = px) {
  return `
		margin: ${toVw(px[0])} ${toVw(px[1])} ${toVw(px[2])} ${toVw(px[3])};
		@media (min-width: ${theme.sizes.mobile}px) {
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
