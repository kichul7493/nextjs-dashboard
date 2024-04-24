import { deleteInvoice } from '@/app/lib/actions';
import { TrashIcon } from '@heroicons/react/24/outline';

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvocieWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvocieWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
