import { GuestMongoRepository } from "../../infra/db/GuestMongoRepository";
import DeleteGuest from "../../data/usecase/guest/DeleteGuest";
import DeleteGuestControlller from "../../controller/guest/DeleteGuestController";

const deleteGuestFactory = () => {
  const guestRepository = new GuestMongoRepository();
  const deleteGuest = new DeleteGuest(guestRepository);
  return new DeleteGuestControlller(deleteGuest);
};

export default deleteGuestFactory();
