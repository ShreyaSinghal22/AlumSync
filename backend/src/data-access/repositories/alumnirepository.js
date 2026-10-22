import { supabase } from "../../config/supaClient.js";

export const getAllAlumniFromDB = async () => {
  const { data, error } = await supabase
  .from("alumni")
  .select("*");

  if (error)
     throw new Error(error.message);
    
  return data;
};