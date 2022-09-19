import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";

describe("Update Guest", () => {
  it("successfully", async () => {
    const { data } = await createGuestTest();
    const { status } = await api.put("/guest", {
      id: data.id,
      name: `${data.name}${Math.floor(Math.random() * 10)}`,
      email: data.email,
      birthday: data.birthday,
      telephone: data.telephone,
      city: data.city,
      state: data.state,
      country: data.country,
    });
    expect(status).toBe(200);
    await api.delete(`/guest/${data.id}`);
  });

  it("Should not be able to update with empty data", async () => {
    await expect(async () => {
      await api.put("/guest", {});
    }).rejects.toThrowError();
  });
});
