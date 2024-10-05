import { useAppSelector } from "@/redux/store";
import type { PlasmoCSUIAnchor } from "plasmo";
import { useEffect } from "react";

type IProps = {
  anchor: PlasmoCSUIAnchor;
};

const HideElement = ({ anchor }: IProps) => {
  const element = anchor?.element as HTMLElement;
  const { count } = useAppSelector((state) => state.counter);

  useEffect(() => {
    // TODO: Apply condition here
    element.style.display = `none`;
  }, [count]);

  return <></>;
};

export default HideElement;
