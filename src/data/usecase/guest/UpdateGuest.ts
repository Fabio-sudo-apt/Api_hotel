import {
  IupdateGuestParams,
  IupdateGuestRepository,
} from "../../protocols/guest/updateGuestRepository";
import * as Yup from "yup";

const validationGuest = Yup.object().shape({
  id: Yup.string().required("Id do Hospede é obrigatório"),
  name: Yup.string().required("Nome do Hospede é obrigatório"),
  email: Yup.string().required("Email do Hospede é obrigatório"),
  birthday: Yup.date().required("Data de Aniversário do Hospede é obrigatório"),
  telephone: Yup.string().required("Telefone do Hospede é obrigatório"),
  city: Yup.string().required("Cidade do Hospede é obrigatório"),
  state: Yup.string().required("Estado do Hospede é obrigatório"),
  country: Yup.string().required("País do Hospede é obrigatório"),
} as Record<keyof IupdateGuestParams, any>);

class UpdateGuest {
  constructor(private readonly updateGuestRepository: IupdateGuestRepository) {}
  async handle(data: IupdateGuestParams) {
    const doc = {
      ...data,
      birthday: new Date(data.birthday),
    };
    await validationGuest.validate(doc, { strict: true, abortEarly: false });
    await this.updateGuestRepository.update(doc);
  }
}

export default UpdateGuest;
