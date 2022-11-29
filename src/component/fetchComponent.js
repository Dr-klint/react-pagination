export async function fetchApi(input) {
  const res = await fetch(`https://restcountries.com/v3.1/${input}`);
  const data = await res.json();
  return data;
}
