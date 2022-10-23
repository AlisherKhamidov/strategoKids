export default interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
  }
  export type UserId = User['id'];