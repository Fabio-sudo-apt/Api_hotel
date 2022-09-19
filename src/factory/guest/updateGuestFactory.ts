import UpdateGuestController from "../../controller/guest/UpdateGuestController";
import UpdateGuest from "../../data/usecase/guest/UpdateGuest";
import { GuestMongoRepository } from "../../infra/db/GuestMongoRepository";

const updateGuestFactory = () => {
  const guestRepository = new GuestMongoRepository();
  const updateGuest = new UpdateGuest(guestRepository);
  return new UpdateGuestController(updateGuest);
};

export default updateGuestFactory();
