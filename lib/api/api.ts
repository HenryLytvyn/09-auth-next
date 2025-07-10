// import axios from 'axios';
import type { Note, NewNote } from '../types/note';
import {
  InvalidLoginResponse,
  InvalidRegisterResponse,
  LoginResponse,
  RegisterResponse,
  ResponseGetData,
} from '@/types/apiResponseTypes';
import { api } from '@/app/api/api';
import { LoginRequest, RegisterRequest } from '@/types/apiRequestTypes';

// axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

// export const nextServer = axios.create({
//   baseURL: 'http://localhost:3000/api',
//   withCredentials: true,
// });

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${notehubToken}`,
};

export async function fetchNotes(page: number, search: string, tag?: string) {
  const { data } = await api<ResponseGetData>('/notes', {
    params: {
      page,
      ...(search !== '' ? { search: search } : {}),
      ...(tag !== 'All' ? { tag } : {}),
    },
    // headers,
  });
  return data;
}

export async function createNote(newNote: NewNote) {
  const { data } = await api<Note>(
    '/notes',
    newNote
    // , { headers }
  );
  return data;
}

export async function deleteNote(noteId: number) {
  const { data } = await api<Note>(
    `/notes/${noteId}`
    // , { headers }
  );
  return data;
}

export async function fetchNoteById(noteId: number) {
  const { data } = await api<Note>(
    `/notes/${noteId}`
    // , { headers }
  );
  return data;
}

export async function register(registrationData: RegisterRequest) {
  const { data } = await api.post<RegisterResponse | InvalidRegisterResponse>(
    `/auth/register`,
    registrationData
    // { headers }
  );
  return data;
}

export async function login(registrationData: LoginRequest) {
  const { data } = await api.post<LoginResponse | InvalidLoginResponse>(
    `/auth/login`,
    registrationData
    // { headers }
  );
  return data;
}
