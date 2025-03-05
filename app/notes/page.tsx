import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import { DataTableDemo } from "./components/DataTable";
export default async function Page() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <>
      <DataTableDemo />
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </>
  );
}
