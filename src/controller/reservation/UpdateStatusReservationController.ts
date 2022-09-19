import UpdateStatusReservation from "../../data/usecase/reservation/UpdateStatusReservation";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class UpdateStatusReservationController {
  constructor(
    private readonly updateStatusReservation: UpdateStatusReservation
  ) {}
  async updateStatus(req: Request, res: Response) {
    try {
      const data = req.body;
      await this.updateStatusReservation.handle(data);
      res.status(200).json({
        message: "Atualização feita com sucesso",
      });
    } catch (error) {
      processError(res, error);
    }
  }
}

export default UpdateStatusReservationController;
