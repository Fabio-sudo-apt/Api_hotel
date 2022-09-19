import Guest from "../../../Entity/Guest";

export interface IfindGuestByIdParams {
  id: string;
}

export interface IfindGuestByIdRepository {
  find(data: IfindGuestByIdParams): Promise<Guest | null>;
}
