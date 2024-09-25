type IProps = {
  checked: boolean;
  onChange: () => void;
};

const SwitchButton = ({ checked, onChange }: IProps) => {
  return (
    <button
      className={`relative w-10 h-5 rounded-full flex items-center px-0.5 transition-colors duration-300 ease-in-out focus:outline-none ${
        checked ? "bg-primary" : "bg-grey-light"
      }`}
      onClick={onChange}
      role="switch"
      aria-checked={checked}>
      <span
        className={`block w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default SwitchButton;
