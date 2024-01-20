"use client";

import Modal from "@/components/ui/modal";
import useStoreModal from "@/hooks/use-store-modal";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useToast } from "../ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
const schema = z.object({
  name: z.string().min(1),
});

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please try again later.",
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Store Modal"
      description="Store Modal Description"
      onClose={onClose}
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="E-commerce" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2 items-center pt-6">
              <Button disabled={loading} variant={"outline"}>
                cancel
              </Button>
              <Button disabled={loading} type="submit">
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
};

export default StoreModal;
