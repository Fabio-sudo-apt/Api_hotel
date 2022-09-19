import { Request, Response } from "express";
import CreateReservatory from "../../data/usecase/reservation/CreateReservation";
import { processError } from "../error/processError";

class CreateReservationController {
  constructor(private readonly createReservation: CreateReservatory) {}
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await this.createReservation.handle(data);
      res.status(201).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default CreateReservationController;
