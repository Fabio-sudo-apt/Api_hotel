import * as Yup from "yup";
import {
  IdeleteGuestParams,
  IdeleteGuestRepository,
} from "../../protocols/guest/deleteGuestRepository";

const validationId = Yup.object().shape({
  id: Yup.string().required("Id do Hospede é obrigatório"),
} as Record<keyof IdeleteGuestParams, any>);

class DeleteGuest {
  constructor(private readonly deleteGuest: IdeleteGuestRepository) {}
  async handle(data: IdeleteGuestParams) {
    await validationId.validate(data);
    await this.deleteGuest.delete(data);
  }
}

export default DeleteGuest;
