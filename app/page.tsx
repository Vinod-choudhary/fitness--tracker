"use client"

import { useEffect } from "react"
import { supabase } from "./lib/supabase"

export default function Home() {

  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")

      console.log("Supabase data:", data)
      console.log("Supabase error:", error)
    }

    testConnection()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
      Vinod's Fitness Tracker 🚀
    </div>
  )
}