import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Log to verify if the client is created successfully
if (supabase) {
    console.log("Supabase client created successfully")
    // console.log("Supabase URL:", supabaseUrl)
    // console.log("Supabase Key:", supabaseKey)
  } else {
    console.error("Failed to create Supabase client")
  }

// console.log('Supabase URL:', supabaseUrl)

// console.log('Supabase Key:', supabaseKey)

//Export the supabase environment variables values to check if they are set correctly   

// export const supabaseUrlValue = supabaseUrl
// export const supabaseKeyValue = supabaseKey


//When does this code run?
// This code runs when the module is loaded, which is typically when the server starts.

//What is a module?
// A module is a reusable piece of code that encapsulates functionality. In Node.js, each file is treated as a module.

//This module exports a Supabase client instance, which can be used to interact with the Supabase API.

//By exporting the client instance, other parts of the application can import and use it to perform database operations, authentication, and other Supabase-related tasks.