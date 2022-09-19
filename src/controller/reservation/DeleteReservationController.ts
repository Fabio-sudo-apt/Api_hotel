import { Request, Response } from "express";
import DeleteResevation from "../../data/usecase/reservation/DeleteReservation";
import { processError } from "../error/processError";

class DeleteReservationController {
  constructor(private readonly deleteReservation: DeleteResevation) {}
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteReservation.handle({ id });
      res.status(200).json({
        message: "Successfully deleted",
      });
    } catch (error) {
      processError(res, error);
    }
  }
}

export default DeleteReservationController;
