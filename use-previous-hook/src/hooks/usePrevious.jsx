import { useEffect, useRef } from "react";

export default function usePrevious(currentValue) {
  const ref = useRef();
  useEffect(() => {
    ref.current = currentValue;
  }, [currentValue]);
  return ref.current;
}
