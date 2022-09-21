import Reservation from "../../../entity/Reservation";

export interface IfindAllReservationParams {
  limit?: string | string[];
  skip?: string | string[];
}

export interface IfindAllReservationResult{
    reservations: Reservation[]
    count: number;
}

export interface IfindAllReservationRepository {
  findAll(data: IfindAllReservationParams): Promise<IfindAllReservationResult>;
}
