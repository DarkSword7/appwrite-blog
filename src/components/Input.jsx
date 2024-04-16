import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`border border-gray-300 text-black rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 ${className}`}
        id={id}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
