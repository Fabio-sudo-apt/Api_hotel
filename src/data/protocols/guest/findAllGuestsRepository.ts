import Guest from "../../../entity/Guest";

export interface IfindAllGuestsParams {
  limit: number;
  skip: number;
}

export interface IfindAllGuestsResult {
  guests: Guest[];
}

export interface IfindAllGuestsRepository {
  findAll(data: IfindAllGuestsParams): Promise<IfindAllGuestsResult>;
}
