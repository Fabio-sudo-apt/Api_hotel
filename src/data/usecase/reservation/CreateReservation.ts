import * as Yup from "yup";
import { BookingStatus } from "../../../utils/reservationStatus";
import {
  IcreateReservatoryParams,
  IcreateReservatoryRepository,
} from "../../protocols/reservation/createReservationRepository";
import moment from "moment";
const validation = Yup.object().shape({
  guest_id: Yup.string().required("ID do Hospede é obrigatório"),
  hotel_name: Yup.string().required("Nome do Hotel é obrigatório"),
  room_number: Yup.number().required("Número do Quarto é obrigatório"),
  reservation_amount: Yup.number().required("Valor da reserva é obrigatório"),
  start_date_reservation: Yup.date().required("Data Inicial é obrigatório"),
  end_date_reservation: Yup.date().required("Data Final é obrigatório"),
} as Record<keyof IcreateReservatoryParams, any>);

class CreateReservatory {
  constructor(
    private readonly createReservatory: IcreateReservatoryRepository
  ) {}
  async handle(data: IcreateReservatoryParams) {
    await validation.validate(data);
  
    if (new Date(data.end_date_reservation) < new Date(data.start_date_reservation))
      throw new Error("A data de inicio nao pode ser maior que a final");

    const doc = {
      ...data,
      reservation_status: BookingStatus.COMFIRMADA,
      start_date_reservation: new Date(data.start_date_reservation),
      end_date_reservation: new Date(data.end_date_reservation),
    };
    const result = await this.createReservatory.create(doc);

    return result;
  }
}

export default CreateReservatory;
