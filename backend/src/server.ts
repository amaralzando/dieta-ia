import cors from "@fastify/cors";
import dotenv from "dotenv";
import Fastify from "fastify";
import { routes } from "./routes";

const app = Fastify({ logger: true });
dotenv.config();

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors);
  app.register(routes);

  try {
    await app.listen({ port: 3333 });
    console.log("Servidor rodando na porta 3333");
  } catch (error) {
    console.log(error);
  }
};

start();
