export async function getPostDetails(id: number) {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(" error response:", errorText);
    throw new Error(` error: ${res.status}`);
  }

  const data = await res.json();
  console.log("details data",data)
  return data;
}
