export async function POST(request) {
  try {
    const body = await request.json();

    console.log("📦 Pedidos recibidos:", body);

    return new Response(JSON.stringify({
      ok: true,
      recibidos: body.length
    }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      ok: false,
      error: error.message
    }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}

// 👇 esto es CLAVE para CORS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}

// test en navegador
export async function GET() {
  return Response.json({
    ok: true,
    message: "RouteHub API viva 🚀"
  });
}