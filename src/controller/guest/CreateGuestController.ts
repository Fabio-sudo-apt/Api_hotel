import { Request, Response } from "express";
import CreateGuest from "../../data/usecase/guest/CreateGuest";
import { processError } from "../error/processError";

class CreateGuestController {
  constructor(private readonly createGuest: CreateGuest) {}
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await this.createGuest.handle(data);

      res.status(201).json(result);
    } catch (error) {
      processError(res, error);
    }
  }
}

export default CreateGuestController;
