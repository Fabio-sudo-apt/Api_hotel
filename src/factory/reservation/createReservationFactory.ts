import CreateReservationController from "../../controller/reservation/CreateReservationController";
import CreateReservatory from "../../data/usecase/reservation/CreateReservation";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const createReservationFactory = () => {
  const reservation = new ReservationMongoRepository();
  const createReservation = new CreateReservatory(reservation);
  return new CreateReservationController(createReservation);
};

export default createReservationFactory();
