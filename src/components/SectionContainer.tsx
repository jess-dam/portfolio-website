interface Props {
  bgColor?: string;
  textColor?: string;
  children: JSX.Element | JSX.Element[];
}

function SectionContainer({ children, bgColor, textColor }: Props) {
  return (
    <div
      className={`flex justify-center place-items-between min-h-screen w-full overflow-clip bg-${bgColor} text-${textColor}`}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
