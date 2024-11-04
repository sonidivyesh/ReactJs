import { useEffect, useState } from "react";

interface LoadingSequence {
  isInitialLoading: boolean;
  isContentLoading: boolean;
}

export const useLoadingSequence = (
  initialDelay = 1000,
  contentDelay = 2000
) => {
  const [loadingState, setLoadingState] = useState<LoadingSequence>({
    isInitialLoading: true,
    isContentLoading: true,
  });

  useEffect(() => {
    // initial loaidng timer
    const initialTimer = setTimeout(() => {
      setLoadingState((prev) => ({
        ...prev,
        isInitialLoading: false,
      }));
    }, initialDelay);

    // content loading timer
    const contentTimer = setTimeout(() => {
      setLoadingState((prev) => ({
        ...prev,
        isContentLoading: false,
      }));
    }, initialDelay + contentDelay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(contentTimer);
    };
  }, [initialDelay, contentDelay]);

  return loadingState;
};
