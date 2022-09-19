import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";
import createReservationTest from "../../utils/createReservationTest";

describe("Delete Resevartion", () => {
  it("successfully deleted", async () => {
    const response = await createGuestTest();
    const startsAt = new Date();
    const endsAt = new Date();
    endsAt.setDate(endsAt.getDate() + 5);
    const { data, status } = await createReservationTest(
      startsAt,
      endsAt,
      response.data.id
    );
    const deleted = await api.delete(`/reservation/${data.id}`);
    expect(deleted.status).toBe(200);
    await api.delete(`/guest/${response.data.id}`);
  });
});
