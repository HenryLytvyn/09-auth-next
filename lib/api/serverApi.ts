import { cookies } from 'next/headers';
import { nextServer as api } from './api';
import { ResponseGetData } from '@/types/apiResponseTypes';
import { Note } from '@/types/note';

export async function checkServerSession() {
  const cookieStore = await cookies();
  const response = await api.get('/auth/session', {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
}

export async function fetchNotes(
  page: number,
  searchText: string,
  tag?: string
): Promise<ResponseGetData> {
  const cookieStore = await cookies();
  const { data } = await api.get<ResponseGetData>('/notes', {
    params: {
      page,
      perPage: 16,
      ...(searchText !== '' ? { search: searchText } : {}),
      ...(tag !== 'All' ? { tag } : {}),
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}

export async function fetchNoteById(noteId: number): Promise<Note> {
  const cookieStore = await cookies();
  const { data } = await api.get<Note>(`/notes/${noteId}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}
