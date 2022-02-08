import { ReactNode } from "react";
import NextLink from "next/link";
import clsx from "clsx";

type LinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  prefetch?: boolean;
  tabIndex?: number;
};

export const Link = ({
  href,
  children,
  className,
  prefetch,
  tabIndex,
}: LinkProps) => (
  <NextLink href={href} prefetch={prefetch}>
    <a
      href={href}
      className={clsx("outline-none focus:underline", className)}
      tabIndex={tabIndex}
    >
      {children}
    </a>
  </NextLink>
);
