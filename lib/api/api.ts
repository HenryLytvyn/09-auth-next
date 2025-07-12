// import axios from 'axios';
import {
  InvalidLoginResponse,
  InvalidRegisterResponse,
  LoginResponse,
  RegisterResponse,
  ResponseGetData,
} from '@/types/apiResponseTypes';
import { api } from '@/app/api/api';
import { LoginRequest, RegisterRequest } from '@/types/apiRequestTypes';
import { NewNote, Note } from '@/types/note';
import axios from 'axios';
import { User } from '@/types/user';

// axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const nextServer = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${notehubToken}`,
};

export async function fetchNotes(page: number, search: string, tag?: string) {
  const { data } = await nextServer<ResponseGetData>('/notes', {
    params: {
      page,
      ...(search !== '' ? { search: search } : {}),
      ...(tag !== 'All' ? { tag } : {}),
    },
    headers,
  });
  return data;
}

export async function createNote(newNote: NewNote) {
  const { data } = await nextServer<Note>('/notes', newNote, { headers });
  return data;
}

export async function deleteNote(noteId: number) {
  const { data } = await nextServer<Note>(`/notes/${noteId}`, { headers });
  return data;
}

export async function fetchNoteById(noteId: number) {
  const { data } = await nextServer<Note>(`/notes/${noteId}`, { headers });
  return data;
}

export async function register(registrationData: RegisterRequest) {
  const { data } = await nextServer.post<
    RegisterResponse | InvalidRegisterResponse
  >(`/auth/register`, registrationData, { headers });
  return data;
}

export async function login(registrationData: LoginRequest) {
  const { data } = await nextServer.post<LoginResponse | InvalidLoginResponse>(
    `/auth/login`,
    registrationData,
    { headers }
  );
  return data;
}

type CheckSessionRequest = {
  success: boolean;
};

export async function checkSession() {
  const { data } = await nextServer.get<CheckSessionRequest>('/auth/session');
  return data.success;
}

export async function getMe() {
  const { data } = await nextServer.get<User>('/auth/me');
  return data;
}

export async function logout(): Promise<void> {
  await nextServer.post('/auth/logout');
}
