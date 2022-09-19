import { ObjectId } from "mongodb";
import {
  IcreateReservatoryParams,
  IcreateReservatoryRepository,
} from "../../data/protocols/reservation/createReservationRepository";
import {
  IdeleteResevetionParams,
  IdeleteResevetionRepository,
} from "../../data/protocols/reservation/deleteResevetionRepository";
import {
  IfindAllReservationParams,
  IfindAllReservationRepository,
  IfindAllReservationResult,
} from "../../data/protocols/reservation/findAllReservationRepository";
import {
  IfindAllResevarsGuestByidParams,
  IfindAllResevarsGuestByidRepository,
  IfindAllResevarsGuestByidResult,
} from "../../data/protocols/reservation/findAllResevarsGuestByidRepository";
import {
  IupdateReservationParams,
  IupdateReservationRepository,
} from "../../data/protocols/reservation/updateReservationRepository";
import {
  IupdateStatusReservationParams,
  IupdateStatusReservationRepository,
} from "../../data/protocols/reservation/updateStatusReservationRepository";
import Guest from "../../entity/Guest";
import Reservation from "../../entity/Reservation";
import dataSource from "../../utils/dataSource";
import { guestExist } from "../utils/guestExist";

class ReservationMongoRepository
  implements
    IcreateReservatoryRepository,
    IfindAllResevarsGuestByidRepository,
    IfindAllReservationRepository,
    IupdateStatusReservationRepository,
    IdeleteResevetionRepository,
    IupdateReservationRepository
{
  async update(data: IupdateReservationParams): Promise<void> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);
    const guest = await guestExist({
      id: data.guest_id,
    });
    if (!guest) throw new Error("Hospede nao existe");
    const reservationExist = await reservationRepository.findOneBy({
      where: {
        _id: new ObjectId(data.id),
      },
    });
    if (!reservationExist) throw new Error("Reserva nao existe");
    const {
      id,
      guest_id,
      reservation_amount,
      start_date_reservation,
      end_date_reservation,
      hotel_name,
      room_number,
    } = data;
    await reservationRepository.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          guest_id,
          reservation_amount,
          start_date_reservation,
          end_date_reservation,
          hotel_name,
          room_number,
        },
      },
      { upsert: true }
    );
  }

  async delete(data: IdeleteResevetionParams): Promise<void> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);

    const reservationExist = await reservationRepository.findOneBy({
      where: {
        _id: new ObjectId(data.id),
      },
    });
    if (!reservationExist) throw new Error("Reserva nao existe");

    await reservationRepository.delete(data.id);
  }

  async updateStatus(data: IupdateStatusReservationParams): Promise<void> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);

    const reservationExist = await reservationRepository.findOneBy({
      where: {
        _id: new ObjectId(data.id),
      },
    });
    if (!reservationExist) throw new Error("Reserva nao existe");

    await reservationRepository.updateOne(
      { _id: new ObjectId(data.id) },
      { $set: { reservation_status: data.status } },
      { upsert: true }
    );
  }

  async findAll(
    data: IfindAllReservationParams
  ): Promise<IfindAllReservationResult> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);
    const result = await reservationRepository.findAndCount({
      take: data.limit,
      skip: data.skip,
    });
    return {
      reservations: result[0],
      count: result[1],
    };
  }

  async findAllGuestById(
    data: IfindAllResevarsGuestByidParams
  ): Promise<IfindAllResevarsGuestByidResult> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);
    const reservationExist = await reservationRepository.findOneBy({
      where: {
        guest_id: data.id,
      },
    });
    if (!reservationExist) throw new Error("Reserva nao existe");
    const result = await reservationRepository.findAndCountBy({
      where: {
        guest_id: data.id,
      },
    });
    return {
      resevars: result[0],
      count: result[1],
    };
  }

  async create(data: IcreateReservatoryParams): Promise<Reservation> {
    const reservationRepository = dataSource.getMongoRepository(Reservation);
    const guest = await guestExist({
      id: data.guest_id,
    });
    if (!guest) throw new Error("Hospede nao existe");
    const reservation = reservationRepository.create(data);
    const result = await reservationRepository.save(reservation);
    return result;
  }
}

export default ReservationMongoRepository;
