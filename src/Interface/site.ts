export interface ButtonItem {
  href: string;
  label: string;
  isRedirect?: boolean; // 是否重定向
  isModal: boolean; // 是否触发弹窗
}

export interface CubeBtn extends ButtonItem {
  iconSvg: string;
  itemColor: string; // 图标颜色
  bgColor: string; // 背景颜色
}

export interface CommonBtn extends ButtonItem {
  height: number;
  width: number;
  iconSvg: string;
  itemColor: string;
  bgColor: string;
}
