import { Select } from "@volvo-cars/react-forms";

import { useCallback } from "react";
import useFetch from "../utils/useFetch";

import type { CarBodyType } from "../types";

export const SelectBodyType: React.FC<{
  className?: string;
  onChange: (bodyType: CarBodyType | undefined) => void;
}> = ({ className, onChange }) => {
  const { data } = useFetch<CarBodyType[]>("/api/bodyTypes");

  const handleChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(value === "all" ? undefined : value);
    },
    [onChange]
  );

  return (
    <Select
      className={className}
      name="bodyType"
      label="Select body type"
      onChange={handleChange}
      defaultValue={"all"}
    >
      <option value="all">All</option>
      {data?.map((bodyType) => (
        <option key={bodyType} value={bodyType}>
          {bodyType}
        </option>
      ))}
    </Select>
  );
};
