import React from "react";

export const useDate = () => {
  const [date, setDate] = React.useState<string>("");

  React.useEffect(() => {
    const date = new Date();
    setDate(date.toDateString());
  }, []);

  return { date };
};
