export async function getPostDetails(id: string) {

  const postId = parseInt(id);
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(" error response:", errorText);
    throw new Error(` error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}


export async function getUserData() {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(" error response:", errorText);
    throw new Error(` error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}


export async function getUserDetails(id: number) {
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(" error response:", errorText);
    throw new Error(` error: ${res.status}`);
  }

  const data = await res.json();
  return data;
}