import type { ButtonHTMLAttributes, FC } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  onChange: () => void;
}

const SwitchButton: FC<IProps> = ({ checked, onChange, ...props }) => {
  return (
    <button
      className={`relative w-10 h-5 rounded-full flex items-center px-0.5 transition-colors duration-300 ease-in-out focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-grey-light ${
        checked ? "bg-primary" : "bg-grey-light"
      }`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      {...props}>
      <span
        className={`block w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default SwitchButton;
