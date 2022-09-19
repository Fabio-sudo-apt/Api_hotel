import FindAllResevarsGuestByid from "../../data/usecase/reservation/FindAllResevarsGuestByid";
import { Request, Response } from "express";
import { processError } from "../error/processError";

class FindAllResevarsGuestByidController {
  constructor(
    private readonly findAllResevarGuestsById: FindAllResevarsGuestByid
  ) {}
  async findAll(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.findAllResevarGuestsById.handle({ id });
      res.status(200).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default FindAllResevarsGuestByidController;
