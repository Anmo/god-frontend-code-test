const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
};

export default fetcher;
