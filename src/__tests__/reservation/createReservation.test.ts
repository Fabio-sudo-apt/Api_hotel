import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";
import createReservationTest from "../../utils/createReservationTest";

describe("create reservation", () => {
  it("Reservation successfully created", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    const { data, status } = await createReservationTest(
      startsAt,
      endsAt,
      response.data.id
    );
    expect(status).toBe(201);
    expect(data).toBeInstanceOf(Object);
    await api.delete(`/guest/${response.data.id}`);
  });

  it("Should not be able to create reservation with empty guest_id", async () => {
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    expect(async () => {
      await createReservationTest(startsAt, endsAt, "");
    }).rejects.toThrowError();
  });

  it("Should not be able create reservation with undefined data", async () => {
    await expect(async () => {
      await api.post("/reservation", {});
    }).rejects.toThrowError();
  });

  it("Should not be able create reservation with null data", async () => {
    await expect(async () => {
      await api.post("/reservation", null);
    }).rejects.toThrowError();
  });

  it("Should not be able to create a reservation with a start date greater than the end date", async () => {
    const { data } = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    startsAt.setDate(endsAt.getDate() + 5);
    await expect(async () => {
      await createReservationTest(startsAt, endsAt, data.id);
    }).rejects.toThrowError();

    await api.delete(`/guest/${data.id}`);
  });
});
