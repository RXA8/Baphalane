// app/api/news/route.js
export async function GET() {
    const response = await fetch(
      'https://tqnkaadrdfkhxxbaympr.supabase.co/functions/v1/return-news-to-client',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        cache: 'no-store',
      }
    );
  
    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
        status: 500,
      });
    }
  
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  