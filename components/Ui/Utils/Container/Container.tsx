import { ReactNode } from "react";
import containerStyle from "./Container.module.css"

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className={containerStyle.container}>
      {children}
    </div>
  );
}