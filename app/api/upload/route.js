export async function GET() {
  return Response.json({ ok: true, message: "API viva" });
}

export async function POST(req) {
  const data = await req.json();

  return Response.json({
    ok: true,
    received: data
  });
}