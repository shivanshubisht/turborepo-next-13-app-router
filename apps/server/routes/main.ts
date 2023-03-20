import fastify from "fastify"

const PORT = (process.env.SERVER_PORT || 5000) as number

const app = fastify({ logger: true })

app.get("/healthcheck", async (request, reply) => {
  return { status: "ok" }
})

app.get("/", async (request, reply) => {
  return { hello: "world" }
})

const start = async () => {
  try {
    await app.listen({ port: PORT })
    console.log(`Server listening on port http://localhost:${PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
