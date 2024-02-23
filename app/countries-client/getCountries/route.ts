export async function GET() {
    let res = await fetch('https://restcountries.com/v3.1/all');
    let data = await res.json();
    return new Response(JSON.stringify(data));
}