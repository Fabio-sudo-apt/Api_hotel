import api from "./createAxios";

const createReservationTest = async (startsAt: Date, endsAt: Date, guest_id?: string) => {
  const doc = {
    guest_id: guest_id,
    hotel_name: "Hotel X",
    room_number: Math.floor(Math.random() * 100),
    reservation_amount: Math.floor(Math.random() * 1000),
    start_date_reservation: startsAt,
    end_date_reservation: endsAt,
  };

  const response = await api.post("/reservation", doc);
  return response;
};

export default createReservationTest;
