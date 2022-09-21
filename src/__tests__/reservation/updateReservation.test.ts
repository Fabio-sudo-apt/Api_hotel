import { ObjectId } from "mongodb";
import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";
import createReservationTest from "../../utils/createReservationTest";

describe("Update Reservation", () => {
  it("Successfully", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    const { data } = await createReservationTest(
      startsAt,
      endsAt,
      response.data.id
    );
    const doc = {
      ...data,
      hotel_name: "Hotel Z",
    };
    const update = await api.put("/reservationupdate", doc);
    expect(update.status).toBe(200);
    expect(update.data).toEqual({
      message: "Atualização feita com sucesso",
    });
    await api.delete(`/guestdelete/${response.data.id}`);
  });

  it("Should not be able to update a reservation with a guest id that does not exist", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    const { data } = await createReservationTest(
      startsAt,
      endsAt,
      response.data.id
    );
    const doc = {
      ...data,
      guest_id: `${response.data.id}${Math.floor(Math.random() * 9)}`,
      hotel_name: "Hotel Z",
    };
    expect(async () => {
      await api.put("/reservationupdate", doc);
    }).rejects.toThrowError();
    await api.delete(`/guestdelete/${response.data.id}`);
  });

  it("Should not be able to update a reservation with id that does not exist", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    const { data } = await createReservationTest(
      startsAt,
      endsAt,
      response.data.id
    );
    const doc = {
      ...data,
      id: `${data.id}${Math.floor(Math.random() * 9)}`,
      hotel_name: "Hotel Z",
    };
    expect(async () => {
      await api.put("/reservationupdate", doc);
    }).rejects.toThrowError();
    await api.delete(`/guestdelete/${response.data.id}`);
  });
});
