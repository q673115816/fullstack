import { createClient } from "@/utils/supabase/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  // 检查用户是否已登录
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <div className="min-h-screen">{children}</div>;
}
