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
  message: {
    href: "https://lcndei2tj60n.feishu.cn/share/base/form/shrcn7wJQqfpYa0uXnsb9Fu9ose",
    label: "留言",
    isRedirect: true,
    isModal: false,
  },
  manual: {
    href: "https://lcndei2tj60n.feishu.cn/docx/TGCJdUHeKozpbexOdg3c4tGQn8d",
    label: "操作手册",
    isRedirect: true,
    isModal: false,
  },
  custom: {
    href: "/custom/",
    label: "企业定制",
    isRedirect: false,
    isModal: false,
  },
  team: {
    href: "http://czzm.team/",
    label: "团队官网",
    isRedirect: false,
    isModal: false,
  },
};

export const cubeBtns: CubeBtn[] = [
  {
    ...commonItems.download,
    iconSvg: `<img src="/logos/download.png" class="w-[40px] h-[40px] object-contain"/>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
  },
  {
    ...commonItems.manual,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<img
                src="/logos/manual.png" 
                class="w-[35px] h-[35px] object-contain"
              />`,
  },
  {
    ...commonItems.message,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<img
                src="/logos/message.png" 
                class="w-[30px] h-[30px] object-contain"
              />`,
  },
  {
    ...commonItems.custom,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<img
                src="/logos/custom.png" 
                class="w-[40px] h-[40px] object-contain"
              />`,
  },
  {
    ...commonItems.team,
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    iconSvg: `<p style="font-size: 23px; font-weight: bold;">CZZM</p>`,
  },
  {
    href: "./L2Pages/L2Index/",
    isModal: false,
    label: "开发信息",
    itemColor: "var(--white)",
    bgColor: "var(--primary-light)",
    isRedirect: false,
    iconSvg: `<img src="/logos/more.png" class="w-[40px] h-[40px] object-contain"/>`,
  },
];

// 下载渠道
export const dlChannels: CommonBtn[] = [
  {
    label: "微软应用商店",
    details: "仅支持Windows 10及以上操作系统",
    href: "ms-windows-store://pdp/?productid=9P7LL3D9LF7B",
    iconSvg: `<img src="/logos/MSShop_color.png"  class="w-[40px] h-[40px] object-contain"/>`,
    itemColor: "var(--white)",
    bgColor: "var(--primary)",
    isRedirect: true,
  },
  {
    label: "下载渠道 1",
    details: ".ZIP压缩包，下载完成后解压安装软件",
    href: "https://gitcode.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<img src="/logos/download2.png" class="w-[40px] h-[40px] object-contain"/>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
  {
    label: "下载渠道 2",
    details: ".ZIP压缩包，下载完成后解压安装软件",
    href: "https://gitee.com/czhaozm/czzm/releases/download/jszk/JSZK.zip",
    iconSvg: `<img src="/logos/download3.png" class="w-[40px] h-[40px] object-contain"/>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
  {
    label: "备用下载渠道",
    details: "若以上链接均失效，请移步至此",
    href: "https://lcndei2tj60n.feishu.cn/docx/CoBUdVqAkoSOE4xzGxocgG8mnkd",
    iconSvg: `<img src="/logos/download4.png" class="w-[40px] h-[40px] object-contain"/>`,
    itemColor: "var(--black-text)",
    bgColor: "var(--second-white)",
    hoverColor: "var(--second-white-dark)",
    isRedirect: true,
  },
];
