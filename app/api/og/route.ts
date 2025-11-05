export const runtime = 'edge';

export async function GET() {
  // Placeholder JSON response; replace with @vercel/og image later
  return new Response(JSON.stringify({ title: 'intelliprop og', ok: true }), {
    headers: { 'content-type': 'application/json' }
  });
}


