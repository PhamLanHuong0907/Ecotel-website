import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type Blog = Tables<"blogs">;
export type BlogInsert = TablesInsert<"blogs">;
export type BlogUpdate = TablesUpdate<"blogs">;

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });
};
