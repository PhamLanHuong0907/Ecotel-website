import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables } from "@/integration/types";

export type Client = Tables<"clients">;

export const useClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};