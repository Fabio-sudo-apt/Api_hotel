import { Router } from "express";
import guest from "./routers/guestRouter";
import reservation from "./routers/reservationRouter";

const router = Router();

router.get("/test", (req, res) => {
  res.send("ok");
});

router.use(guest);

router.use(reservation);

export default router;
