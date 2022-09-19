import * as Yup from "yup";
import {
  IupdateReservationParams,
  IupdateReservationRepository,
} from "../../protocols/reservation/updateReservationRepository";

const validation = Yup.object().shape({
  id: Yup.string().required("ID do Reserva é obrigatório"),
  guest_id: Yup.string().required("ID do Hospede é obrigatório"),
  hotel_name: Yup.string().required("Nome do Hotel é obrigatório"),
  room_number: Yup.number().required("Número do Quarto é obrigatório"),
  reservation_amount: Yup.number().required("Valor da reserva é obrigatório"),
  start_date_reservation: Yup.date().required("Data Inicial é obrigatório"),
  end_date_reservation: Yup.date().required("Data Final é obrigatório"),
} as Record<keyof IupdateReservationParams, any>);

class UpdateReservation {
  constructor(
    private readonly updateReservation: IupdateReservationRepository
  ) {}
  async handle(data: IupdateReservationParams) {
    await validation.validate(data);
    await this.updateReservation.update(data);
  }
}

export default UpdateReservation;
