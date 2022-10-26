export default interface Kid {
  id: number;
  user_id: number;
  name: string;
  secondName: string;
  middleName: string;
  birthDate: Date;
  group_id: number;
  photo : string;
}

export type KidId = Kid['id'];
