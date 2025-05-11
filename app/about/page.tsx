export default async function Page() {
  const res = await fetch("https://api.com/data");
  const data = await res.json();
  return <pre>{JSON.stringify(data)}</pre>;
}
