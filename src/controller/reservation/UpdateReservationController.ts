import UpdateReservation from "../../data/usecase/reservation/UpdateReservation";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class UpdateReservationController {
  constructor(private readonly updateReservation: UpdateReservation) {}
  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      await this.updateReservation.handle(data);
      res.status(200).json({
        message: "Atualização feita com sucesso",
      });
    } catch (error) {
      processError(res, error);
    }
  }
}

export default UpdateReservationController;
