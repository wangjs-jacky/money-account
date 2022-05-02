import { useEffect, useRef } from "react";

export const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  // 每次更新 +1
  useEffect(() => {
    count.current++;
  });
  // 当count>=2 时，则真实更新
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps); // 不可变数据
};
