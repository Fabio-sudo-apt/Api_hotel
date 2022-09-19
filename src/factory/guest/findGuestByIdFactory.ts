import FindGuestByIdController from "../../controller/guest/FindGuestByIdController";
import FindGuestById from "../../data/usecase/guest/FindGuestById";
import { GuestMongoRepository } from "../../infra/db/GuestMongoRepository";

const findGuestByIdFactory = () => {
  const guestRepository = new GuestMongoRepository();
  const getGuestFormId = new FindGuestById(guestRepository);
  return new FindGuestByIdController(getGuestFormId);
};

export default findGuestByIdFactory();
