/// <reference types="vite-plugin-svgr" />

declare module "*.svg?react" {
    import { FC, SVGProps } from "react";
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  
  declare module "*.svg" {
    const content: string;
    export default content;
  }