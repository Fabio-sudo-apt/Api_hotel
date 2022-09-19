import { ObjectId } from "mongodb";
import Guest from "../../entity/Guest";
import dataSource from "../../utils/dataSource";

interface params {
  email?: string;
  id?: string;
}

export async function guestExist(data: params): Promise<Guest | null> {
  const guestRepository = dataSource.getMongoRepository(Guest);

  const emailExist = data.email ? true : false;

  const guest = emailExist
    ? await guestRepository.findOne({
        where: {
          email: data.email,
        },
      })
    : await guestRepository.findOneBy({
        where: {
          _id: new ObjectId(data.id),
        },
      });
  return guest;
}
