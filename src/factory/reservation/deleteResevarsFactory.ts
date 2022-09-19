import DeleteReservationController from "../../controller/reservation/DeleteReservationController";
import DeleteResevation from "../../data/usecase/reservation/DeleteReservation";
import ReservationMongoRepository from "../../infra/db/ReservationMongoRepository";

const deleteResevarsFactory = () => {
  const reservation = new ReservationMongoRepository();
  const deleteResevar = new DeleteResevation(reservation);
  return new DeleteReservationController(deleteResevar);
};

export default deleteResevarsFactory();
