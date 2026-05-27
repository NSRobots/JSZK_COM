import type { ButtonItem, CubeBtn, CommonBtn } from "../Interface/site";

export const commonItems: Record<string, ButtonItem> = {
  index: {
    href: "/",
    label: "首页",
    isRedirect: false,
    isModal: false,
  },
  download: {
    href: "",
    label: "下载",
    isRedirect: false,
    isModal: true,
  },
  video: {
    href: "https://lcndei2tj60n.feishu.cn/docx/TGCJdUHeKozpbexOdg3c4tGQn8d",
    label: "教程",
    isRedirect: true,
    isModal: false,
  },
  manual: {
    href: "https://lcndei2tj60n.feishu.cn/docx/TGCJdUHeKozpbexOdg3c4tGQn8d",
    label: "手册",
    isRedirect: true,
    isModal: false,
  },
  ai: {
    href: "https://chat.deepseek.com/",
    label: "AI",
    isRedirect: true,
    isModal: false,
  },
  feedback: {
    href: "https://lcndei2tj60n.feishu.cn/share/base/form/shrcn7wJQqfpYa0uXnsb9Fu9ose",
    label: "反馈",
    isRedirect: true,
    isModal: false,
  },
  sponsor: {
    href: "/contact/",
    label: "代言",
    isRedirect: false,
    isModal: false,
  },
  other: {
    href: "http://czzm.team/",
    label: "其他产品",
    isRedirect: false,
    isModal: false,
  },
};

export const cubeBtns: CubeBtn[] = [
  {
    ...commonItems.download,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> 
      <path d="M12 3 L12 16" /> 
      <path d="M8 13 L12 17 L16 13" /> 
      <path d="M4 21 L20 21" />
    </svg>`,
  },
  {
    ...commonItems.video,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="13" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></rect><rect x="4.5" y="4.5" width="15" height="10" rx="0.5" fill="none" stroke="currentColor" stroke-width="1"></rect> <rect x="9" y="17" width="6" height="1.5" rx="0.5" fill="currentColor"></rect> <rect x="11" y="16" width="2" height="2" fill="currentColor"></rect></svg>`,
  },
  {
    ...commonItems.manual,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128" style="background-color: var(--primary); border-radius: 8px;"><path d="M3 3H15L21 9V21H3V3Z" stroke="var(--white)" stroke-width="2.2" stroke-linejoin="round"/><path d="M15 3V9H21L15 3Z" fill="var(--white)"/><rect x="6" y="11" width="12" height="2" rx="0.5" fill="var(--white)"/><rect x="6" y="16" width="12" height="2" rx="0.5" fill="var(--white)"/></svg>`,
  },
  {
    ...commonItems.ai,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">Agent</p>`,
  },
  {
    ...commonItems.feedback,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">Q&A</p>`,
  },
  {
    ...commonItems.sponsor,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17.5L5.5 22L8 14.5L2 9.5H9.5L12 2Z" fill="white"/></svg>`,
  },
  {
    href: "./L2Pages/L2Index/",
    isModal: false,
    label: "更多",
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: false,
    iconSvg: `<p style="font-size: 25px; font-weight: bold;"><...></p>`,
  },
  {
    ...commonItems.other,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">Other</p>`,
  },
];

// 下载渠道
export const dlChannels: CommonBtn[] = [
  {
    label: "微软商店",
    isModal: false,
    href: "https://apps.microsoft.com/detail/9p7ll3d9lf7b",
    iconSvg: `<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> 
  <rect x="5" y="5" width="40" height="40" fill="var(--white)"/> 
  <rect x="55" y="5" width="40" height="40" fill="var(--white)"/> 
  <rect x="5" y="55" width="40" height="40" fill="var(--white)"/> 
  <rect x="55" y="55" width="40" height="40" fill="var(--white)"/></svg>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: true,
    height: 20,
    width: 80,
  },
  {
    label: "站外线路一",
    isModal: false,
    href: "https://gitee.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">.ZIP1</p>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: true,
    height: 20,
    width: 80,
  },
  {
    label: "站外线路二",
    isModal: false,
    href: "https://gitcode.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">.ZIP2</p>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: true,
    height: 20,
    width: 80,
  },
  {
    label: "备用路线",
    isModal: false,
    href: "https://lcndei2tj60n.feishu.cn/docx/CoBUdVqAkoSOE4xzGxocgG8mnkd",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">DOC</p>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: true,
    height: 20,
    width: 80,
  },
];
