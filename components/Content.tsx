interface ContentProps {
  children: any;
  style?: string;
  id?: string;
}

export const Content = ({ children, style = '', id = '' }: ContentProps) => {
  return (
    <div id={id} className={`py-10 md:py-20 lg:py-40 ${style}`}>
      {children}
    </div>
  );
};
