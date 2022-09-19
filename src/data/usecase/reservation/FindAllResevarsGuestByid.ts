import {
  IfindAllResevarsGuestByidParams,
  IfindAllResevarsGuestByidRepository,
} from "../../protocols/reservation/findAllResevarsGuestByidRepository";
import * as Yup from "yup";

const validation = Yup.object().shape({
  id: Yup.string().required("ID do Hospede é obrigatório"),
} as Record<keyof IfindAllResevarsGuestByidParams, any>);

class FindAllResevarsGuestByid {
  constructor(
    private readonly finaAllResevars: IfindAllResevarsGuestByidRepository
  ) {}
  async handle(data: IfindAllResevarsGuestByidParams) {
    await validation.validate(data);
    const result = this.finaAllResevars.findAllGuestById(data);
    return result;
  }
}

export default FindAllResevarsGuestByid;
