import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";

describe("Find Guest By Id", () => {
  it("successfully", async () => {
    const { data } = await createGuestTest();
    expect(async () => {
      await api.get(`/guest/${data.id}`);
    }).toBeInstanceOf(Object);
    await api.delete(`/guest/${data.id}`);
  });

  it("Should not be able to find with incorrect id", async () => {
    const { data } = await createGuestTest();
    expect(async () => {
      await api.get(`/guest/${data.id}${Math.floor(Math.random() * 10)}`);
    }).rejects.toThrowError();
    await api.delete(`/guest/${data.id}`);
  });

  it("Should not be able to find with null id", async () => {
    const { data } = await createGuestTest();
    expect(async () => {
      await api.get(`/guest/${null}`);
    }).rejects.toThrowError();
    await api.delete(`/guest/${data.id}`);
  });

  it("Should not be able to find with empty id", async () => {
    expect(async () => {
      await api.get(`/guest`);
    }).rejects.toThrowError();
  });
});
