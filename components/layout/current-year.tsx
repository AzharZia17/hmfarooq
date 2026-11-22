"use client";

import { useEffect, useState } from "react";

const BUILD_YEAR = 2026;

export function CurrentYear() {
  const [year, setYear] = useState(BUILD_YEAR);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);
  return <span>{year}</span>;
}
