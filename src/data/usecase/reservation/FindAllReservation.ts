import {
  IfindAllReservationParams,
  IfindAllReservationRepository,
} from "../../protocols/reservation/findAllReservationRepository";

import * as Yup from "yup";

const validation = Yup.object().shape({
  limit: Yup.string(),
  skip: Yup.string()
} as Record<keyof IfindAllReservationParams, any>);

class FindAllReservation {
  constructor(
    private readonly findAllReservation: IfindAllReservationRepository
  ) {}
  async handle(data: IfindAllReservationParams) {
    await validation.validate(data);
    const result = this.findAllReservation.findAll(data);
    return result;
  }
}

export default FindAllReservation;
