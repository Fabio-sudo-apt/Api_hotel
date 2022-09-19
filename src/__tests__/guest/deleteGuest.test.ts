import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";

describe("Delete Guest", () => {
  it("successfully deleted", async () => {
    const { data } = await createGuestTest();
    const t = await api.delete(`/guest/${data.id}`);
    expect(t.status).toBe(200);
  });

  it("Should not be able to delete with empty id", async () => {
    expect(async () => {
      await api.delete(`/guest`);
    }).rejects.toThrowError();
  });

  it("Should not be able to delete with incorrect id", async () => {
    const response = await createGuestTest();
    expect(async () => {
      await api.delete(
        `/guest/${response.data.id}${Math.floor(Math.random() * 10)}`
      );
    }).rejects.toThrowError();
    await api.delete(`/guest/${response.data.id}`);
  });
});
