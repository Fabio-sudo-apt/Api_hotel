import FindAllGuest from "../../data/usecase/guest/FindAllGuest";
import { Request, Response } from "express";
import { getError } from "../../utils/services";
import { processError } from "../error/processError";

class FindAllGuestsController {
  constructor(private readonly findAllGuests: FindAllGuest) {}
  async findAll(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await this.findAllGuests.handle(data);
      res.status(200).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default FindAllGuestsController;
