import KidData from './KidData';

export default interface Kid extends KidData {
  id: number;
  user_id: number;
}

export type KidId = Kid['id'];
