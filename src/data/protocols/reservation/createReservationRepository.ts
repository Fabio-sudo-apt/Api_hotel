import Reservation from "../../../entity/Reservation";
import { BookingStatus } from "../../../utils/reservationStatus";

export interface IcreateReservatoryParams {
  guest_id: string;
  hotel_name: string;
  room_number: number;
  reservation_amount: number;
  start_date_reservation: Date;
  end_date_reservation: Date;
}

export interface IcreateReservatoryRepository {
  create(data: IcreateReservatoryParams): Promise<Reservation>;
}
