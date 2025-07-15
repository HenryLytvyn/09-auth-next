import { Note } from './note';

export type ResponseGetData = {
  notes: Note[];
  totalPages: number;
};

export type RegisterResponse = {
  username: string;
  email: string;
  // avatar: string;
};

export type LoginResponse = {
  username: string;
  email: string;
  avatar: string;
};

// export type InvalidRegisterResponse = {
//   message: string;
// };

// export type InvalidLoginResponse = {
//   message: string;
// };
