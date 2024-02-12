import { useEffect, useState } from "react";
import useSWR from "swr";

import fetcher from "./fetcher";

// To prevent a flick when selecting different body types (in homepage)
// I'm "saving" the previous data fetched
const useFetch = <T extends any>(url: string) => {
  const swr = useSWR<T>(url, fetcher);
  const [data, setData] = useState<T | undefined>(swr.data);

  useEffect(() => {
    if (!swr.data) {
      return;
    }

    setData(swr.data);
  }, [swr.data]);

  return {
    ...swr,
    data,
  };
};

export default useFetch;
