import { Request, Response } from "express";
import DeleteGuest from "../../data/usecase/guest/DeleteGuest";
import { processError } from "../error/processError";

class DeleteGuestControlller {
  constructor(private readonly deleteGuest: DeleteGuest) {}
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteGuest.handle({ id });
      res.status(200).json({
        message: 'delete done successfully'
      })
    } catch (error) {
      processError(res, error);
    }
  }
}

export default DeleteGuestControlller