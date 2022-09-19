import {
  IcreateGuestParams,
  IcreateGuetRepository,
} from "../../data/protocols/guest/createGuestRepository";
import dataSource from "../../utils/dataSource";
import Guest from "../../entity/Guest";
import {
  IfindGuestByIdParams,
  IfindGuestByIdRepository,
} from "../../data/protocols/guest/findGuestByIdRepository";
import { ObjectId } from "mongodb";
import {
  IfindAllGuestsParams,
  IfindAllGuestsRepository,
  IfindAllGuestsResult,
} from "../../data/protocols/guest/findAllGuestsRepository";
import {
  IdeleteGuestParams,
  IdeleteGuestRepository,
} from "../../data/protocols/guest/deleteGuestRepository";
import {
  IupdateGuestParams,
  IupdateGuestRepository,
} from "../../data/protocols/guest/updateGuestRepository";
import { guestExist } from "../utils/guestExist";
import Reservation from "../../entity/Reservation";

export class GuestMongoRepository
  implements
    IcreateGuetRepository,
    IfindGuestByIdRepository,
    IfindAllGuestsRepository,
    IdeleteGuestRepository,
    IupdateGuestRepository
{
  async update(data: IupdateGuestParams): Promise<void> {
    const guestRepository = dataSource.getMongoRepository(Guest);
    const exist = await guestExist({
      id: data.id,
    });
    if (!exist) throw new Error("Hospede nao foi encontrado");
    const { name, email, city, birthday, country, state, telephone } = data;
    await guestRepository.updateOne(
      { _id: new ObjectId(data.id) },
      { $set: { name, email, city, birthday, country, state, telephone } },
      { upsert: true }
    );
  }

  async delete(data: IdeleteGuestParams): Promise<void> {
    const guestRepository = dataSource.getMongoRepository(Guest);
    const reservationRepository = dataSource.getMongoRepository(Reservation);
    const exist = await guestExist({
      id: data.id,
    });
    if (!exist) throw new Error("Hospede nao foi encontrado");
    await reservationRepository.delete({ guest_id: data.id });
    await guestRepository.delete(data.id);
  }

  async findAll(data: IfindAllGuestsParams): Promise<IfindAllGuestsResult> {
    const guestRepository = dataSource.getMongoRepository(Guest);
    const guests = await guestRepository.find({
      take: data.limit,
      skip: data.skip,
    });
    return { guests: guests };
  }

  async find(data: IfindGuestByIdParams): Promise<Guest | null> {
    const guest = await guestExist({
      id: data.id,
    });
    if (!guest) throw new Error("Hospede nao foi encontrado");
    return guest;
  }

  async create(data: IcreateGuestParams): Promise<Guest> {
    const guestRepository = dataSource.getMongoRepository(Guest);
    const exist = await guestExist({
      email: data.email,
    });
    if (exist) throw new Error("Hospede ja cadastrado");
    const guest = guestRepository.create(data);
    const result = await guestRepository.save(guest);

    return result;
  }
}
