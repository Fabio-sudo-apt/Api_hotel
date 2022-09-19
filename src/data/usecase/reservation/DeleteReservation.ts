import * as Yup from "yup";
import {
  IdeleteResevetionParams,
  IdeleteResevetionRepository,
} from "../../protocols/reservation/deleteResevetionRepository";

const validation = Yup.object().shape({
  id: Yup.string().required("ID do Reserva é obrigatório"),
} as Record<keyof IdeleteResevetionParams, any>);

class DeleteResevation {
  constructor(private readonly deleteResevation: IdeleteResevetionRepository) {}
  async handle(data: IdeleteResevetionParams) {
    await validation.validate(data);
    await this.deleteResevation.delete(data);
  }
}

export default DeleteResevation;
