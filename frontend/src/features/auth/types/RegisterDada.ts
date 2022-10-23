import Credentials from './Credentials';

export default interface RegisterData extends Credentials {
  passwordRepeat: string;
  name: string;
  email: string;
}
