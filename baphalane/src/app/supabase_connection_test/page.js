'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function Home() {
  //const [projectUrl, setProjectUrl] = useState('')
  //const [status, setStatus] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    // Test Supabase connection and fetch some data from the table
    const testSupabaseConnection = async () => {
      try {

        
        // Fetch data from the 'test_table' (which we just created)
        const { data: tableData, error: fetchError } = await supabase.from('test_table').select('*')
        if (fetchError) throw fetchError

        setData(tableData || [])
      } catch (error) {
        setStatus(`Error: ${error.message}`)
      }
    }

    
    testSupabaseConnection()
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      
      {/* Display the fetched data if available */}
      {data.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold">Fetched Data:</h2>
          <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}  
    </main>
  )
}
