interface SubHeadingProps {
  children: any;
  style?: string;
}

export const SubHeading = ({ children, style = '' }: SubHeadingProps) => {
  return <p className={`text-2xl mt-10 text-gray-800 ${style}`}>{children}</p>;
};
