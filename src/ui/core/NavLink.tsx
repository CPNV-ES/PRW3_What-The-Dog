import { ReactNode } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

import { Link } from "./Link";

export type NavLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
};

export const NavLink = ({
  href,
  exact,
  className,
  activeClassName,
  children,
}: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, isActive ? activeClassName : "")}
    >
      {children}
    </Link>
  );
};
