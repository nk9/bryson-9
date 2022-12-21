import { useCallback, useState } from "react";

export default function useTimeoutState(defaultState) {
  const [state, _setState] = useState(defaultState);
  const [currentTimeoutId, setCurrentTimeoutId] = useState();

  const setState = useCallback(
    (action, opts) => {
      if (currentTimeoutId != null) {
        clearTimeout(currentTimeoutId);
      }

      _setState(action);

      const id = setTimeout(() => _setState(defaultState), opts.timeout);
      setCurrentTimeoutId(id);
    },
    [currentTimeoutId, defaultState]
  );
  return [state, setState];
}
