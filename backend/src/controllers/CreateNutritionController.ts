import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutriotionService } from "../service/CreateNutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

export class CreateNutriotionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps;

    const createNutriotionService = new CreateNutriotionService();
    const nutrition = await createNutriotionService.execute({
      name,
      weight,
      height,
      age,
      gender,
      objective,
      level,
    });

    reply.send(nutrition);
  }
}
