export interface IupdateGuestParams {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  telephone: string;
  city: string;
  state: string;
  country: string;
}

export interface IupdateGuestRepository {
  update(data: IupdateGuestParams): Promise<void>;
}
