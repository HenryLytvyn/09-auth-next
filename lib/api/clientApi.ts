import type { Note, NewNote } from '../../types/note';
import { ResponseGetData } from '@/types/ResponseGetData';
import { nextServer as api } from './api';
import {
  LoginResponse,
  RegisterResponse,
  LoginRequest,
  RegisterRequest,
} from '@/types/authorisationTypes';
import { User } from '@/types/user';

export async function fetchNotes(
  page: number,
  searchText: string,
  tag?: string
): Promise<ResponseGetData> {
  const { data } = await api.get<ResponseGetData>('/notes', {
    params: {
      page,
      perPage: 16,
      ...(searchText !== '' ? { search: searchText } : {}),
      ...(tag !== 'All' ? { tag } : {}),
    },
  });
  return data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const { data } = await api.post<Note>('/notes', newNote);
  return data;
}

export async function deleteNote(noteId: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${noteId}`);
  return data;
}

export async function fetchNoteById(noteId: string): Promise<Note> {
  const { data } = await api.get<Note>(`/notes/${noteId}`);
  return data;
}

export async function register(credentials: RegisterRequest) {
  const { data } = await api.post<RegisterResponse>(
    `/auth/register`,
    credentials
  );
  return data;
}

export async function login(credentials: LoginRequest) {
  const { data } = await api.post<LoginResponse>(`/auth/login`, credentials);
  return data;
}

export async function logout(): Promise<void> {
  await api.post('/auth/logout');
}

export async function checkSession() {
  const { data } = await api.get<{ message: string }>('/auth/session');
  return data;
}

export async function getMe() {
  const { data } = await api.get<User>('/users/me');
  return data;
}

export async function userUpdate(user: User) {
  const { data } = await api.patch<User>('/users/me', user);
  return data;
}
