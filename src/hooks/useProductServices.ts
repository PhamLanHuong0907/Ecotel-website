import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type ProductService = Tables<"product_services">;
export type ProductServiceInsert = TablesInsert<"product_services">;
export type ProductServiceUpdate = TablesUpdate<"product_services">;

export const useProductServices = () => {
  return useQuery({
    queryKey: ["product_services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("product_services")
        .select(`
          *,
          services:service_id (id, title)
        `)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};


