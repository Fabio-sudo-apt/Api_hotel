import {
  IupdateStatusReservationParams,
  IupdateStatusReservationRepository,
} from "../../protocols/reservation/updateStatusReservationRepository";
import * as Yup from "yup";
import { updateStatus } from "../../../utils/reservationStatus";

const validation = Yup.object().shape({
  id: Yup.string().required("ID do reserva é obrigatório"),
  status: Yup.string().required("Status reserva é obrigatório"),
} as Record<keyof IupdateStatusReservationParams, any>);

class UpdateStatusReservation {
  constructor(
    private readonly updateStatusReservation: IupdateStatusReservationRepository
  ) {}
  async handle(data: IupdateStatusReservationParams) {
    await validation.validate(data);
    const doc ={
      ...data,
      status: updateStatus(data.status)
    }
    await this.updateStatusReservation.updateStatus(data);
  }
}

export default UpdateStatusReservation;
