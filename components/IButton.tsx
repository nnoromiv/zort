import { IButtonType } from "@/types";
import {Button} from "@heroui/react";
import { FC } from "react";

const IButton: FC<IButtonType> = ({buttonText, color, className}) => {
  return (
    <Button color={color ? color : "primary"} className={`${className} text-white rounded-xl`}>
      {buttonText}
    </Button>
  )
}

export default IButton
