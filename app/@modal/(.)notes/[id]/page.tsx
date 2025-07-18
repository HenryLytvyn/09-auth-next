// import { fetchNoteById } from '@/lib/api/serverApi';
// import { QueryClient } from '@tanstack/react-query';
import NotePreviewClient from './NotePreview.client';

// type Props = {
//   params: Promise<{ id: string }>;
// };

export default async function NotePreview() {
  // const { id } = await params;
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['note', id],
  //   queryFn: () => fetchNoteById(id),
  // });

  return <NotePreviewClient />;
}
