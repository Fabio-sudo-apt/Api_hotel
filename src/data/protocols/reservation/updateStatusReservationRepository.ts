export interface IupdateStatusReservationParams {
  id: string;
  status: string;
}

export interface IupdateStatusReservationRepository {
  updateStatus(data: IupdateStatusReservationParams): Promise<void>;
}
