import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type Service = Tables<"services">;
export type ServiceInsert = TablesInsert<"services">;
export type ServiceUpdate = TablesUpdate<"services">;

export const useServices = () => {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("sort_order", { ascending: true });
      
      if (error) throw error;
      return data as Service[];
    },
  });
};


