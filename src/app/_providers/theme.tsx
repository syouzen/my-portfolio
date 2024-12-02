"use client";

import { ThemeProvider } from "next-themes";

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export default function ThemeProviders(props: ThemePropsInterface) {
  const { children } = props;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
