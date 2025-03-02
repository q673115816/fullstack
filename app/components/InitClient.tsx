"use client";

import { useUserStore } from "@/app/store/useUserStore";
import useAuth from "@/app/hooks/useAuth";
import { useEffect } from "react";

const InitClient = () => {
  const { handleSignIn } = useAuth();
  useEffect(() => {
    handleSignIn();
  }, []);
  return null;
};

export default InitClient;
