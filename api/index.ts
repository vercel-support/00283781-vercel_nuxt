export default async function handler(req: Request) {
  return new Response('Hello, world!', {
    headers: { 'content-type': 'text/plain' },
    status: 200,
  });
}
