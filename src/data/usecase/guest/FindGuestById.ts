import * as Yup from "yup";
import {
  IfindGuestByIdParams,
  IfindGuestByIdRepository,
} from "../../protocols/guest/findGuestByIdRepository";

const validateId = Yup.object().shape({
  id: Yup.string().required("Id do Hospede é obrigatório"),
} as Record<keyof IfindGuestByIdParams, any>);

class FindGuestById {
  constructor(private readonly getGuestById: IfindGuestByIdRepository) {}
  async handle(data: IfindGuestByIdParams) {
    await validateId.validate(data);
    const result = await this.getGuestById.find(data);
    return result;
  }
}

export default FindGuestById;
