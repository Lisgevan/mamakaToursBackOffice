import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cozxitwtehzbzesixgtr.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvenhpdHd0ZWh6Ynplc2l4Z3RyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTc1MDk3NCwiZXhwIjoyMDM3MzI2OTc0fQ.vuS1olxJyy7SGAtQ6FbTLg3loAqjqWIe9D72eDfq2cA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

