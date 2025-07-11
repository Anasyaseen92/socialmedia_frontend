import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gpfwpusrkuznvxbfzwjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZndwdXNya3V6bnZ4YmZ6d2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNDI2NTksImV4cCI6MjA2NzcxODY1OX0.DQoUDXhBGmPOIXhuTbR0VcmM3xzJvrRKI63bVGE-0Zo";

export const supabase = createClient(supabaseUrl, supabaseKey);
