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
  // video: {
  //   href: "https://lcndei2tj60n.feishu.cn/docx/TGCJdUHeKozpbexOdg3c4tGQn8d",
  //   label: "教程",
  //   isRedirect: true,
  //   isModal: false,
  // },
  manual: {
    href: "https://lcndei2tj60n.feishu.cn/docx/TGCJdUHeKozpbexOdg3c4tGQn8d",
    label: "文档",
    isRedirect: true,
    isModal: false,
  },
  // ai: {
  //   href: "https://chat.deepseek.com/",
  //   label: "AI",
  //   isRedirect: true,
  //   isModal: false,
  // },
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
    label: "关于团队",
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
  // {
  //   ...commonItems.video,
  //   itemColor: "var(--white)",
  //   bgColor: "var(--primary-light)",
  //   iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="13" rx="1" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></rect><rect x="4.5" y="4.5" width="15" height="10" rx="0.5" fill="none" stroke="currentColor" stroke-width="1"></rect> <rect x="9" y="17" width="6" height="1.5" rx="0.5" fill="currentColor"></rect> <rect x="11" y="16" width="2" height="2" fill="currentColor"></rect></svg>`,
  // },
  {
    ...commonItems.manual,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M3 3H15L21 9V21H3V3Z" stroke="var(--white)" stroke-width="2.2" stroke-linejoin="round"/><path d="M15 3V9H21L15 3Z" fill="var(--white)"/><rect x="6" y="11" width="12" height="2" rx="0.5" fill="var(--white)"/><rect x="6" y="16" width="12" height="2" rx="0.5" fill="var(--white)"/></svg>`,
  },
  // {
  //   ...commonItems.ai,
  //   itemColor: "var(--white)",
  //   bgColor: "var(--primary-light)",
  //   iconSvg: `<p style="font-size: 25px; font-weight: bold;">Agent</p>`,
  // },
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
    ...commonItems.other,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<p style="font-size: 25px; font-weight: bold;">CZZM</p>`,
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
];

// 下载渠道
export const dlChannels: CommonBtn[] = [
  {
    label: "微软应用商店",
    details: "（仅支持Windows 10及以上操作系统）",
    href: "https://apps.microsoft.com/detail/9p7ll3d9lf7b",
    iconSvg: `<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="40" height="40" fill="var(--white)"/><rect x="55" y="5" width="40" height="40" fill="var(--white)"/><rect x="5" y="55" width="40" height="40" fill="var(--white)"/><rect x="55" y="55" width="40" height="40" fill="var(--white)"/></svg>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary)",
    isRedirect: true,
  },
  {
    label: "下载渠道 1",
    details: "（.ZIP压缩包，需下载ZIP解压软件）",
    href: "https://gitee.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="8"></line><polyline points="8 12 12 16 16 12"></polyline></svg>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
  {
    label: "下载渠道 2",
    details: "（.ZIP压缩包，需下载ZIP解压软件）",
    href: "https://gitcode.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="8"></line><polyline points="8 12 12 16 16 12"></polyline></svg>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
  {
    label: "备用渠道",
    details: "（若以上站内链接均失效，请移步至此）",
    href: "https://lcndei2tj60n.feishu.cn/docx/CoBUdVqAkoSOE4xzGxocgG8mnkd",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path d="M3 3H15L21 9V21H3V3Z" stroke="var(--black-text)" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 3V9H21L15 3Z" fill="var(--black-text)"/><rect x="6" y="11" width="12" height="2" rx="0.5" fill="var(--black-text)"/><rect x="6" y="16" width="12" height="2" rx="0.5" fill="var(--black-text)"/></svg>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
];
