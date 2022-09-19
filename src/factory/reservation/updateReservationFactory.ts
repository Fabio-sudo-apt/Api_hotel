import UpdateReservationController from "../../controller/reservation/UpdateReservationController";
import UpdateReservation from "../../data/usecase/reservation/UpdateReservation";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const updateReservationFactory = () => {
  const reservation = new ReservationMongoRepository();
  const updateReservation = new UpdateReservation(reservation);
  return new UpdateReservationController(updateReservation);
};

export default updateReservationFactory();
