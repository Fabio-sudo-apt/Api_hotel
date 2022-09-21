import createGuest from "../factory/guest/createGuestFactory";
import findGuestById from "../factory/guest/findGuestByIdFactory";
import findAllGuest from "../factory/guest/findAllGuestsFactory";
import deleteGuest from "../factory/guest/deleteGuestFactory";
import updateGuest from "../factory/guest/updateGuestFactory";
import { Router } from "express";

const guest = Router();

guest.get("/guests", (req, res) => findAllGuest.findAll(req, res));
guest.get("/guestfind/:id", (req, res) => findGuestById.find(req, res));
guest.post("/guestCreate", (req, res) => createGuest.create(req, res));
guest.put("/guestupdate", (req, res) => updateGuest.update(req, res));
guest.delete("/guestdelete/:id", (req, res) => deleteGuest.delete(req, res));

export default guest;
