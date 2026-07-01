export async function POST(req) {
  try {
    const data = await req.json();

    console.log("📦 recibido:", data);

    return Response.json({
      ok: true,
      message: "Upload recibido correctamente",
      data
    });

  } catch (error) {
    return Response.json({
      ok: false,
      error: error.message
    }, { status: 500 });
  }
}