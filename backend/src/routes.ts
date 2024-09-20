import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { CreateNutriotionController } from "./controllers/CreateNutritionController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
    console.log("Rota chamada!!!!!!");

    let responseText =
      '```json\n{\n  "nome": "Gabriel Amaral",\n  "sexo": "Masculino",\n  "idade": 23,\n  "altura": 1.80,\n  "peso": 150,\n  "objetivo": "Emagrecer",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "1 fatia de pão integral",\n        "2 fatias de queijo minas",\n        "1 ovo cozido",\n        "1 xícara de café com leite desnatado",\n        "1 banana"\n      ]\n    },\n    {\n      "horario": "10:30",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n            "1 iogurte grego natural desnatado",\n            "1 colher de sopa de granola"\n        ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis cozido",\n        "Salada de folhas verdes com tomate e azeite de oliva"\n      ]\n    },\n    {\n      "horario": "15:30",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 xícara de frutas vermelhas",\n        "1 fatia de queijo cottage"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe assado",\n        "1 xícara de batata doce cozida",\n        "Salada de folhas verdes com cenoura ralada e limão"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 copo de leite de amêndoas",\n        "1 colher de sopa de chia"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Proteína do soro do leite",\n    "Creatina",\n    "Glutamina",\n    "Ômega 3"\n  ]\n}\n```';

    try {
      //exrair hegex
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\n```/g, "")
        .trim();

      let jsonObject = JSON.parse(jsonString);

      return reply.send({ data: jsonObject });
    } catch (error) {
      console.log(error);
    }
  });

  fastify.post(
    "/create",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateNutriotionController().handle(request, reply);
    }
  );
}
