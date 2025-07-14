import axios from 'axios';
import type { Note, NewNote } from '../../types/note';
import { ResponseGetData } from '@/types/ResponseGetData';
import { nextServer as api } from './api';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
const notehubToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${notehubToken}`,
};

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
    headers,
  });
  return data;
}

export async function createNote(newNote: NewNote): Promise<Note> {
  const { data } = await api.post<Note>('/notes', newNote, { headers });
  return data;
}

export async function deleteNote(noteId: number): Promise<Note> {
  const { data } = await api.delete<Note>(`/notes/${noteId}`, { headers });
  return data;
}

export async function fetchNoteById(noteId: number): Promise<Note> {
  const { data } = await api.get<Note>(`/notes/${noteId}`, { headers });
  return data;
}
