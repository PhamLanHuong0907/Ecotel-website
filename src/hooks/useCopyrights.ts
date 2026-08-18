import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables } from "@/integration/types";

export type Copyright = Tables<"copyrights">;

export const useCopyrights = () => {
  return useQuery({
    queryKey: ["copyrights"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("copyrights")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Copyright[];
    },
  });
};
