interface ImageWithLabelContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const ImageWithLabelContainer = ({
  children,
}: ImageWithLabelContainerProps) => {
  return (
    <div className="grid auto-row content-between justify-items-center gap-2">
      {children}
    </div>
  );
};
