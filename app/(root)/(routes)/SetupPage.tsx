"use client";
import useStoreModal from "@/hooks/use-store-modal";
import { useEffect } from "react";

export const SetupPage = () => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, []);

  return <div>ilham</div>;
};
