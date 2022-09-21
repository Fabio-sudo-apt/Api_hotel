import { Router } from "express";
import createReservation from "../factory/reservation/createReservationFactory";
import deleteResevarsFactory from "../factory/reservation/deleteResevarsFactory";
import findAllReservationFactory from "../factory/reservation/findAllReservationFactory";
import findAllResevarsGuestByid from "../factory/reservation/findAllResevarsGuestByidFactory";
import updateReservationFactory from "../factory/reservation/updateReservationFactory";
import updateStatusReservation from "../factory/reservation/updateStatusReservationFactory";

const reservation = Router();

reservation.get("/reservations", (req, res) =>
  findAllReservationFactory.findAll(req, res)
);

reservation.get("/reservationguestbyid/:id", (req, res) =>
  findAllResevarsGuestByid.findAll(req, res)
);

reservation.post("/reservationcreate", (req, res) =>
  createReservation.create(req, res)
);

reservation.put("/reservationstatus", (req, res) =>
  updateStatusReservation.updateStatus(req, res)
);

reservation.put("/reservationupdate", (req, res) =>
  updateReservationFactory.update(req, res)
);

reservation.delete("/reservationdelete/:id", (req, res) =>
  deleteResevarsFactory.delete(req, res)
);

export default reservation;
