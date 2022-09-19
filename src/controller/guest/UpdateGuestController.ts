import UpdateGuest from "../../data/usecase/guest/UpdateGuest";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class UpdateGuestController {
  constructor(private readonly updateGuest: UpdateGuest) {}
  async update(req: Request, res: Response) {
    try {
      const data = req.body;
      await this.updateGuest.handle(data);
      res.status(200).json({
        message: "successful upgrade",
      });
    } catch (error) {
      processError(res, error);
    }
  }
}

export default UpdateGuestController;
