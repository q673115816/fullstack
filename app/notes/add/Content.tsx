"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/app/store/useUserStore";
const Content = () => {
  const { user } = useUserStore();
  const router = useRouter();
  const form = useForm();
  const supabase = createClient();
  //   const { data: notes } = await supabase.from("notes").select();
  const handleSubmit = async (data: any) => {
    if (!user) {
      router.push("/login"); // 如果用户未登录，重定向到登录页面
      return;
    }
    await supabase.from("notes").insert({ title: data.note, user_id: user.id });
    router.push("/notes");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem>
              <FormLabel>note</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Content;
