import { Hono } from 'hono'

const app = new Hono()

.post("/", async (c) => {
  const res = await c.req.json();
  const body = res as Record<string, unknown>;
  return c.json(
    {
      "keys": Object.keys(body).length,
      "bytes": new TextEncoder().encode(JSON.stringify(body)).length,
      "types": Object.fromEntries(Object.entries(body).map(([k,v]) => [k, typeof v])),
    }
  )
})

export default app