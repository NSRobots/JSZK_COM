export interface ButtonItem {
  href: string;
  label: string;
  isRedirect?: boolean; // 是否重定向
  isModal?: boolean; // 是否触发弹窗
}

export interface CubeBtn extends ButtonItem {
  itemColor: string; // 图标颜色
  bgColor: string; // 背景颜色
  iconSvg?: string;
}

export interface CommonBtn extends ButtonItem {
  height?: number;
  width?: number;
  itemColor?: string;
  bgColor?: string;
  hoverColor?: string;
  iconSvg?: string;
  details?: string;
}

export interface TypingSection {
  lines: string[];
  typingClass: string;
  typingSpeed?: number;
}

export interface PageData {
  title: string;
  height?:
    | string
    | number
    | {
        base: string | number;
        md?: string | number;
        lg?: string | number;
      };
  buttons: CubeBtn[] | null;
  showBack?: boolean;
  showJSZK?: boolean;
  showTitleLogo?: boolean;
  logoLinked?: boolean;
  typingSections: TypingSection[];
  boxStyle?: string;
}
