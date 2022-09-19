import { rejects } from "assert";
import api from "../../utils/createAxios";
import createGuestTest from "../../utils/createGuestTest";

describe("Create Guest", () => {
  it("Guest successfully created", async () => {
    const { data, status } = await createGuestTest();
    expect(data).toBeInstanceOf(Object);
    expect(status).toBe(201);
    await api.delete(`/guest/${{ data }.data.id}`);
  });

  it("Should not be able create guest with null data", async () => {
    await expect(async () => {
      await api.post("/guest", null);
    }).rejects.toThrowError();
  });

  it("Should not be able create guest with undefined data", async () => {
    await expect(async () => {
      await api.post("/guest", {});
    }).rejects.toThrowError();
  });

  it("Should not be able to create guest with empty email", async () => {
    await expect(async () => {
      await createGuestTest({
        name: "adm",
        email: "",
        birthday: new Date(),
        telephone: "9987654321",
        city: "Sao Paulo",
        state: "SP",
        country: "Brasil",
      });
    }).rejects.toThrowError();
  });

  it("Should not be able to create guest with repeated email", async () => {
    const { data } = await createGuestTest();
    await expect(async () => {
      await createGuestTest({
        name: data.name,
        email: data.email,
        birthday: data.birthday,
        telephone: data.telephone,
        city: data.city,
        state: data.state,
        country: data.country,
      });
    }).rejects.toThrowError();
    await api.delete(`/guest/${data.id}`);
  });
});
