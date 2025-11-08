const BoxContainer = ({ children, className }) => {
  return <div className={`w-11/12 mx-auto ${className}`}>{children}</div>;
};

export default BoxContainer;
