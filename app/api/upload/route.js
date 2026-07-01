export async function POST(request) {
  try {
    const body = await request.json();

    console.log("================================");
    console.log("📦 Pedidos recibidos:");
    console.log(body);
    console.log("================================");

    return Response.json({
      ok: true,
      recibidos: body.length,
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      ok: false,
      error: error.message,
    }, {
      status: 500,
    });

  }
}

export async function GET() {
  return Response.json({
    ok: true,
    mensaje: "RouteHub API funcionando 🚀"
  });
}