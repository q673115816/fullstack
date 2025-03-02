import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Content from "./Content";
import { createClient } from "@/utils/supabase/client";
export default async function Page() {
  const supabase = createClient();
  // 检查用户是否已登录
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <Content />;
}
