export async function GET() {
  const res = await fetch("https://12c4-117-6-40-134.ngrok.io/searchAll");
  const data = await res.json();

  return Response.json({ data });
}
