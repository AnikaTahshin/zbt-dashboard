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
  console.log("user data",data)
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
  console.log("user data",data)
  return data;
}