import useSWR from "swr";
import { Select } from "@volvo-cars/react-forms";

import fetcher from "../utils/fetcher";

import type { CarBodyType } from "../types";
import { useCallback } from "react";

export const SelectBodyType: React.FC<{
  className?: string;
  onChange: (bodyType: CarBodyType | undefined) => void;
}> = ({ className, onChange }) => {
  const { data } = useSWR<CarBodyType[]>("/api/bodyTypes", fetcher);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value || undefined);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      name="bodyType"
      label="Select body type"
      onChange={handleChange}
      defaultValue={""}
    >
      <option value="">All</option>
      {data?.map((bodyType) => (
        <option key={bodyType} value={bodyType}>
          {bodyType}
        </option>
      ))}
    </Select>
  );
};
