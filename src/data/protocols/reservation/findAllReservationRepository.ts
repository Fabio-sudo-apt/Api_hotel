import Reservation from "../../../entity/Reservation";

export interface IfindAllReservationParams {
  limit?: number;
  skip?: number;
}

export interface IfindAllReservationResult{
    reservations: Reservation[]
    count: number;
}

export interface IfindAllReservationRepository {
  findAll(data: IfindAllReservationParams): Promise<IfindAllReservationResult>;
}
