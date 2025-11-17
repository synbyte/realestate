import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jprkxjvzadmyyunhbfvp.supabase.co";

// Client-side Supabase client (uses anon key for browser)
// NOTE: Client-side code can ONLY access NEXT_PUBLIC_* environment variables
export function createBrowserClient() {
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. " +
        "Client-side code can only access environment variables prefixed with NEXT_PUBLIC_. " +
        "Please add NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file with your Supabase anon/public key."
    );
  }

  return createClient(supabaseUrl, anonKey);
}

// Server-side Supabase client (uses service role key)
export function createServerClient() {
  const supabaseKey = process.env.SUPABASE_KEY;

  if (!supabaseKey) {
    throw new Error(
      "Missing Supabase service role key. Please set SUPABASE_KEY environment variable."
    );
  }

  return createClient(supabaseUrl, supabaseKey);
}
