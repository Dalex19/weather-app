function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
}

type Func<T extends any[], R> = (...args: T) => R;

function debouncer<T extends any[], R>(func: Func<T, R>, wait: number): Func<T, void> {
  let timeout: NodeJS.Timeout;

  return function debouncedFn(...args: T) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}


export { debouncer }

