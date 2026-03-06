"use client";

import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {

  useEffect(() => {
    async function testConnection() {

      const { data, error } = await supabase
        .from("activities")
        .select("*");

      console.log("Supabase data:", data);
      console.log("Supabase error:", error);
    }

    testConnection();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-4xl font-bold">
      Vinod's Fitness Tracker 🚀
    </div>
  );
}