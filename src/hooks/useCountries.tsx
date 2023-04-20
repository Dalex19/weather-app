import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export function useCountries() {
  const [text, setText] = useState("");
  const [countries, setCountries] = useState([]);
  const [debouncedText] = useDebounce(text, 500);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${debouncedText}`
        );
        const data = await response.json();
        const countryNames = data.map(({ name }) => name.common);

        if (isMounted) {
          setCountries(countryNames);
        }
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
    };

    if (debouncedText) {
      fetchData();
    } else {
      setCountries([]);
    }

    return () => {
      isMounted = false;
    };
  }, [debouncedText]);

  return { setText, countries };
}

