import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";
import createReservationTest from "../../utils/createReservationTest";

describe("Find All Resevars Guest By id", () => {
  it("Find Reservation successfully", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    await createReservationTest(startsAt, endsAt, response.data.id);
    const { status } = await api.get(`/reservationguestbyid/${response.data.id}`);
    expect(status).toBe(200);
    await api.delete(`/guestdelete/${response.data.id}`);
  });

  it("Should not be able to find with incorrect guest_id", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    await createReservationTest(startsAt, endsAt, response.data.id);
    expect(async () => {
      await api.get(
        `/reservationguestbyid/${response.data.id}${Math.floor(Math.random() * 9)}`
      );
    }).rejects.toThrowError();
    await api.delete(`/guestdelete/${response.data.id}`);
  });

  it("Should not be able to find with empty guest_id", async () => {
    expect(async () => {
      await api.get(`/reservationguestbyid`);
    }).rejects.toThrowError();
  });
});
