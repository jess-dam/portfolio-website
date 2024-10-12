interface Props {
  id?: string;
  bgColor?: string;
  textColor?: string;
  children: JSX.Element | JSX.Element[];
}

function SectionContainer({ children, bgColor, textColor, id }: Props) {
  return (
    <div
      id={id} className={`flex justify-center place-items-between min-h-screen w-full px-4 overflow-hidden bg-${bgColor} text-${textColor}`}
    >
      {children}
    </div>
  );
}

export default SectionContainer;
