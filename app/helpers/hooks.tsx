import { useEffect, useState } from "react";
import { DebounceType } from "./types";

export const useDebouncedValue = ({
  initialValue,
  delay = 300,
}: DebounceType) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(initialValue);
    }, delay);

    return () => clearTimeout(timeout);
  }, [initialValue, delay]);

  return value;
};

export default function useWindowSize() {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeFunc = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resizeFunc);

    resizeFunc();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return dimensions;
}
