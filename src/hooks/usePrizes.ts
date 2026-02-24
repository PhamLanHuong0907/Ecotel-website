import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type Prize = Tables<"prizes">;
export type PrizeInsert = TablesInsert<"prizes">;
export type PrizeUpdate = TablesUpdate<"prizes">;

export const usePrizes = () => {
  return useQuery({
    queryKey: ["prizes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("prizes")
        .select("*")
        .order("period", { ascending: false });
      
      if (error) throw error;
      return data as Prize[];
    },
  });
};


