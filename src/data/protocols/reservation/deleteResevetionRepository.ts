export interface IdeleteResevetionParams {
  id: string;
}

export interface IdeleteResevetionRepository {
  delete(data: IdeleteResevetionParams): Promise<void>;
}
