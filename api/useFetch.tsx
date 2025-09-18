import { useState, useEffect } from "react";
export interface Post {
  id: number;
  title: string;
  body: string;
  
}

const useFetch = (url: string) => {
  const [posts, setData] = useState<Post>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((posts) => {setLoading(false);setData(posts)})
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { posts, error, loading };
};

export default useFetch;