import { IcreateGuestParams } from "../data/protocols/guest/createGuestRepository";
import api from "./createAxios";

const createGuestTest = async (data?: IcreateGuestParams) => {
  const response = await api.post(
    "/guest",
    data == undefined
      ? {
          name: "adm",
          email: "adm@gmail.com",
          birthday: "2022-01-01",
          telephone: "9987654321",
          city: "Sao Paulo",
          state: "SP",
          country: "Brasil",
        }
      : data
  );
  return response;
};

export default createGuestTest;
