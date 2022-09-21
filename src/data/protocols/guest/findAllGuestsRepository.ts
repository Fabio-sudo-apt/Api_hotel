import Guest from "../../../entity/Guest";

export interface IfindAllGuestsParams {
  limit?: string | string[];
  skip?: string | string[];
}

export interface IfindAllGuestsResult {
  guests: Guest[];
}

export interface IfindAllGuestsRepository {
  findAll(data: IfindAllGuestsParams): Promise<IfindAllGuestsResult>;
}
