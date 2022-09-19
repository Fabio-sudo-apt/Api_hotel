import Guest from "../../../entity/Guest";

export interface IcreateGuestParams {
  name: string;
  email: string;
  birthday: Date;
  telephone: string;
  city: string;
  state: string;
  country: string;
}

export interface IcreateGuetRepository {
  create(data: IcreateGuestParams): Promise<Guest>;
}
