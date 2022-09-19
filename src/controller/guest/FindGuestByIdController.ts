import FindGuestById from "../../data/usecase/guest/FindGuestById";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class FindGuestByIdController {
  constructor(private readonly findGuestFromId: FindGuestById) {}
  async find(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const result = await this.findGuestFromId.handle({ id });
      res.status(200).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default FindGuestByIdController