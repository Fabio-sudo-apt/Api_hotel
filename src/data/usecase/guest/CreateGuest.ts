import {
  IcreateGuetRepository,
  IcreateGuestParams,
} from "../../protocols/guest/createGuestRepository";
import * as Yup from "yup";

const validationGuest = Yup.object().shape({
  name: Yup.string().required("Nome do Hospede é obrigatório"),
  email: Yup.string().required("Email do Hospede é obrigatório"),
  birthday: Yup.date().required("Data de Aniversário do Hospede é obrigatório"),
  telephone: Yup.string().required("Telefone do Hospede é obrigatório"),
  city: Yup.string().required("Cidade do Hospede é obrigatório"),
  state: Yup.string().required("Estado do Hospede é obrigatório"),
  country: Yup.string().required("País do Hospede é obrigatório"),
} as Record<keyof IcreateGuestParams, any>);

class CreateGuest {
  constructor(private readonly createGuestRepository: IcreateGuetRepository) {}
  async handle(data: IcreateGuestParams) {
    const doc = {
      ...data,
      birthday: new Date(data.birthday),
    };
    await validationGuest.validate(doc, { abortEarly: false, strict: true });
    const result = await this.createGuestRepository.create(doc);
    return result;
  }
}
export default CreateGuest;
