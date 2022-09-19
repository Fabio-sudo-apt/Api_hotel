import Reservation from "../../../entity/Reservation";

export interface IfindAllResevarsGuestByidParams {
  id: string;
}

export interface IfindAllResevarsGuestByidResult {
  resevars: Reservation[];
  count: number;
}

export interface IfindAllResevarsGuestByidRepository {
  findAllGuestById(
    data: IfindAllResevarsGuestByidParams
  ): Promise<IfindAllResevarsGuestByidResult>;
}
