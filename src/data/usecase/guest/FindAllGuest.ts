import {
  IfindAllGuestsParams,
  IfindAllGuestsRepository,
} from "../../protocols/guest/findAllGuestsRepository";
import * as Yup from "yup";

const validetionData = Yup.object().shape({
  limit: Yup.string(),
  skip: Yup.string(),
});

class FindAllGuest {
  constructor(private readonly findAllGuests: IfindAllGuestsRepository) {}
  async handle(data: IfindAllGuestsParams) {
    await validetionData.validate(data);
    const result = await this.findAllGuests.findAll(data);
    return result;
  }
}

export default FindAllGuest;
