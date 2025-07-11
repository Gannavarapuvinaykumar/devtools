export async function fetchTools() {
  const res = await fetch("http://localhost:8000/tools");
  return res.json();
}

export async function refreshTools() {
  const res = await fetch("http://localhost:8000/refresh", { method: "POST" });
  return res.json();
}
