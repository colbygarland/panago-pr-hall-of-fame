interface ContentProps {
  children: any;
  style?: string;
}

export const Content = ({ children, style = '' }: ContentProps) => {
  return <div className={`py-10 md:py-20 lg:py-40 ${style}`}>{children}</div>;
};
