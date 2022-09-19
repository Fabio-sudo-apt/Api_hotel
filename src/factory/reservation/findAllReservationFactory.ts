import FindAllReservationController from "../../controller/reservation/FindAllReservationController";
import FindAllReservation from "../../data/usecase/reservation/FindAllReservation";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const findAllReservationFactory = () => {
  const reservation = new ReservationMongoRepository();
  const findAllResevars = new FindAllReservation(reservation);
  return new FindAllReservationController(findAllResevars);
};

export default findAllReservationFactory();
