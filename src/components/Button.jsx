const Button = ({
  children = "Click me!",
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hover = "hover:bg-blue-800",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${bgColor} hover:${hover} ${textColor} font-bold py-2 px-4 rounded-lg ${className}`}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
