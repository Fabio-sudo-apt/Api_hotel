import UpdateStatusReservationController from "../../controller/reservation/UpdateStatusReservationController";
import UpdateStatusReservation from "../../data/usecase/reservation/UpdateStatusReservation";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const updateStatusReservationFactory = () => {
  const reservation = new ReservationMongoRepository();
  const updateStatusReservation = new UpdateStatusReservation(reservation);
  return new UpdateStatusReservationController(updateStatusReservation);
};

export default updateStatusReservationFactory();
