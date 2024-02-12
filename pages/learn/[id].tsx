import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import fetcher from "../../src/utils/fetcher";
import { Card } from "../../src/components/Car";

function Learn() {
  const router = useRouter();
  const { data, error } = useSWR(`/api/cars/${router.query.id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-pagemargin self-center">
      <Card {...data} withBackButton />
    </div>
  );
}

export default Learn;
