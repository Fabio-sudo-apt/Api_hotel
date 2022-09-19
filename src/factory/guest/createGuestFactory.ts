import CreateGuestController from "../../controller/guest/CreateGuestController";
import CreateGuest from "../../data/usecase/guest/CreateGuest";
import { GuestMongoRepository } from "../../infra/db/GuestMongoRepository";

const createGuestFactory = () => {
  const guestRepository = new GuestMongoRepository();
  const createGuest = new CreateGuest(guestRepository);
  return new CreateGuestController(createGuest);
};

export default createGuestFactory();
