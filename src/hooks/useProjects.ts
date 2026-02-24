import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type Project = Tables<"projects">;
export type ProjectInsert = TablesInsert<"projects">;
export type ProjectUpdate = TablesUpdate<"projects">;

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *,
          services:category_id (id, title)
        `)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};


