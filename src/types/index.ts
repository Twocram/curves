export type TButtonProps = {
  isDisabled: boolean;
  type: string;
  size: string;
};

export type TLinkButtonProps = {
  label: string;
  url: string;
};

export type TCardInfoProps = {
  caption: string;
  date: string;
  size: string;
  duration: string;
  type: string;
};

export type TCardAboutProps = {
  desc: string;
};

export type TVideoProps = {
  src: string;
};

export type TShortTextProps = {
  duration: number;
  start: number;
  text: string;
};
