export interface ButtonItem {
  href: string;
  label: string;
  isRedirect?: boolean; // 是否重定向
}

export interface CubeBtn extends ButtonItem {
  iconSvg: string;
  itemColor: string; // 图标颜色
  bgColor: string; // 背景颜色
}
