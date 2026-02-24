import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integration/client";
import { Tables, TablesInsert, TablesUpdate } from "@/integration/types";
import { toast } from "sonner";

export type HeroSection = Tables<"hero_sections">;
export type HeroSectionInsert = TablesInsert<"hero_sections">;
export type HeroSectionUpdate = TablesUpdate<"hero_sections">;

export const useHeroSections = () => {
  return useQuery({
    queryKey: ["hero_sections"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hero_sections")
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


