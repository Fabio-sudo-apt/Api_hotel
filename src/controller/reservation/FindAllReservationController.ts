import { Request, Response } from "express";
import FindAllReservation from "../../data/usecase/reservation/FindAllReservation";
import { processError } from "../error/processError";

class FindAllReservationController {
  constructor(private readonly findAllResevation: FindAllReservation) {}
  async findAll(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await this.findAllResevation.handle(data);
      res.status(200).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default FindAllReservationController;
