type OptionsTypes = {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
};

export default async function useFetch({ url }: { url: string }) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", 
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(
      `Failed to fetch data: ${res.status} - ${JSON.stringify(errorData.errors)}`
    );
  }

  return res.json();
}
