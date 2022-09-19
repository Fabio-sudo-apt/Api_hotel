import FindAllResevarsGuestByidController from "../../controller/reservation/FindAllResevarsGuestByidController";
import FindAllResevarsGuestByid from "../../data/usecase/reservation/FindAllResevarsGuestByid";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const findAllResevarsGuestByidFactory = () => {
  const reservation = new ReservationMongoRepository();
  const findAllResevarsGuestBy = new FindAllResevarsGuestByid(reservation);
  return new FindAllResevarsGuestByidController(findAllResevarsGuestBy);
};

export default findAllResevarsGuestByidFactory();
