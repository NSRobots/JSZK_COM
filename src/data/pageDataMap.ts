import type { PageData } from "../Interface/site";
import { cubeBtns } from "../data/btnDatas";

export const pageDataMap: Record<string, PageData> = {
  index: {
    title: "键鼠智控",
    buttons: cubeBtns,
    typingSections: [
      {
        lines: ["轻松一键,", "告别所有重复操作"],
        typingClass: "text-3xl",
        typingSpeed: 40,
      },
    ],
    showBack: false,
    showJSZK: true,
    showTitleLogo: true,
    logoLinked: false,
    boxStyle: "padding-top: 140px;",
  },
  // download: {
  //   title: "键鼠智控",
  //   buttons: dlChannels,
  //   typingSections: [
  //     {
  //       lines: ["请选择下载方式", '("微软商店"仅支持Windows10+系统)'],
  //       typingFontClass: "text-[18px] md:text-[28px]",
  //       typeSpeed: 50,
  //     }
  //   ],
  //   showBack: true,
  //   logoLinked: false,
  // },
  custom: {
    title: "企业定制",
    buttons: null,
    height: { base: "450px", md: "520px", lg: "520px" },
    typingSections: [
      {
        lines: [
          "♥️ 如果您认为这是一款不错的软件,",
          "那么我们携手让其走向更大的舞台",
        ],
        typingClass: "text-[20px] md:text-[28px] pb-8",
        typingSpeed: 25,
      },
      {
        lines: [
          "微信号：czhaozma",
          "官方客服QQ：92649808",
          "电子邮箱：czhaozm@qq.com",
        ],
        typingClass: "text-[16px] md:text-[24px] pt-8",
        typingSpeed: 10,
      },
    ],
    boxStyle: "padding-top: 40px;",
  },
  contact: {
    title: "联系我们",
    buttons: null,
    height: { base: "480px", md: "570px", lg: "570px" },
    typingSections: [
      {
        lines: ["若您在使用中遇到问题,", "可以随时联系我们 ♥️ "],
        typingClass: "text-[20px] md:text-[28px] pb-8",
        typingSpeed: 25,
      },
      {
        lines: [
          "QQ交流群：516765146",
          "官方客服QQ：92649808",
          "电子邮箱：czhaozm@qq.com",
          "微信公众号/抖音/哔哩哔哩：创赵智码",
        ],
        typingClass: "text-[16px] md:text-[24px] pt-8",
        typingSpeed: 10,
      },
    ],
    boxStyle: "padding-top: 40px;",
  },
};

export const constPath = [
  { params: { page: undefined } },
  // { params: { page: "download" } },
  { params: { page: "custom" } },
  { params: { page: "contact" } },
];

/**
 * 将高度配置转换为 CSS 变量 + 媒体查询方案
 * - base: 手机端默认值，作为 CSS 变量回退
 * - mediaQueries: 注入为 <style>，在平板/桌面断点覆盖 --banner-h
 * Banner div 使用 `min-height: var(--banner-h, <base>)`，不再硬编码
 */
export function getBannerHeightCSS(
  h:
    | string
    | number
    | { base: string | number; md?: string | number; lg?: string | number }
    | undefined,
): { base: string; mediaQueries: string } {
  if (h === undefined) return { base: "auto", mediaQueries: "" };

  if (typeof h === "string" || typeof h === "number")
    return { base: String(h), mediaQueries: "" };

  // 响应式对象：生成媒体查询
  const parts: string[] = [];
  if (h.md !== undefined)
    parts.push(
      `@media (min-width: 768px) { #banner { --banner-h: ${h.md}; } }`,
    );
  if (h.lg !== undefined)
    parts.push(
      `@media (min-width: 1024px) { #banner { --banner-h: ${h.lg}; } }`,
    );

  return {
    base: String(h.base),
    mediaQueries: parts.join("\n"),
  };
}
