export default interface User {
    id: number;
    name: string;
    email: string;
    // password: string;
    phone: string;
    isAdmin: boolean;
  }
  export type UserId = User['id'];
