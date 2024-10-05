import logo from "@/assets/logo/blur-guard.svg";

const DefaultHeader = () => {
  return (
    <div className="py-4 bg-opacity-60 bg-primary-50 px-4">
      <div className={"flex gap-x-4 items-center"}>
        <img src={logo} alt="Blur Guard" className="w-9 h-9" />
        <h3 className="text-primary font-bold text-xl">Blur Guard</h3>
      </div>
    </div>
  );
};

export default DefaultHeader;
