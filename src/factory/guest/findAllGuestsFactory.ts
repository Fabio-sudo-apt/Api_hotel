import FindAllGuestsController from "../../controller/guest/FindAllGuestsController";
import FindAllGuest from "../../data/usecase/guest/FindAllGuest";
import { GuestMongoRepository } from "../../infra/db/GuestMongoRepository";

const findAllGuestsFactory = () => {
  const guestRepository = new GuestMongoRepository();
  const findAll = new FindAllGuest(guestRepository);
  return new FindAllGuestsController(findAll);
};

export default findAllGuestsFactory();
