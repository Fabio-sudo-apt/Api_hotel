export interface IdeleteGuestParams {
  id: string;
}

export interface IdeleteGuestRepository {
  delete(data: IdeleteGuestParams): Promise<void>;
}
