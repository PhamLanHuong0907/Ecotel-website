import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables } from "@/integration/types";
export type Navigation = Tables<"navigation">;
export const useNavigation = () => {
  return useQuery({
    queryKey: ["navigation"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("navigation")
        .select("*")
        .order("sort_order", { ascending: true });
      
      if (error) throw error;
      return data as Navigation[];
    },
  });
};


