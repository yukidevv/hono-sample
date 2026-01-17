import {testClient} from "hono/testing";
import router from "./main.ts";
import { expect } from "jsr:@std/expect";

const rTest = testClient(router)

Deno.test("basic test1", async() => {
  const res = await rTest.index.$post({
    json:{
      "message1":"arigatou",
    }
  })
  const body = await res.json();
  expect(res.status).toBe(200)
  expect(body.keys).toBe(1)
  expect(body.bytes).toBe(23)
  expect(body.types.message1).toBe("string")
})

Deno.test("basic test2",async() =>{
  const res = await rTest.index.$post({
    json:{
      "string1":"arigatou",
      "string2":"konichiwa",
      "string3":"ohayou",
    }
  })
  const body = await res.json();
  expect(res.status).toBe(200)
  expect(body.keys).toBe(3);
  expect(body.bytes).toBe(63)
  expect(body.types.string1).toBe("string")
})

Deno.test("404test",async() =>{
  const res = await router.request("/notfound");
  expect(res.status).toBe(404);
})