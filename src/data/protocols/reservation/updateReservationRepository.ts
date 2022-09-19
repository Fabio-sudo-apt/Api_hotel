export interface IupdateReservationParams {
  id: string;
  guest_id: string;
  hotel_name: string;
  room_number: number;
  reservation_amount: number;
  start_date_reservation: Date;
  end_date_reservation: Date;
}

export interface IupdateReservationRepository {
  update(data: IupdateReservationParams): Promise<void>;
}
