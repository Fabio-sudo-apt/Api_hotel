import FindAllGuest from "../../data/usecase/guest/FindAllGuest";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class FindAllGuestsController {
  constructor(private readonly findAllGuests: FindAllGuest) {}
  async findAll(req: Request, res: Response) {
    try {
      const { limit, skip } = req.headers;
      const result = await this.findAllGuests.handle({ limit, skip });
      res.status(200).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default FindAllGuestsController;
