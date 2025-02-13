"use client";

import { usePathname } from "next/navigation";

export default function Pathname() {
  const pathname = usePathname();
  return <div>matteobeu@website:{pathname === "/" ? "~" : pathname}</div>;
}
