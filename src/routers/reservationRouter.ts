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

reservation.get("/reservation/:id", (req, res) =>
  findAllResevarsGuestByid.findAll(req, res)
);

reservation.post("/reservation", (req, res) =>
  createReservation.create(req, res)
);

reservation.put("/statusReservation", (req, res) =>
  updateStatusReservation.updateStatus(req, res)
);

reservation.put("/reservation", (req, res) =>
  updateReservationFactory.update(req, res)
);

reservation.delete("/reservation/:id", (req, res) =>
  deleteResevarsFactory.delete(req, res)
);

export default reservation;
