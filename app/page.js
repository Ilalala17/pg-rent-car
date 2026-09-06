"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { kendaraan } from "./data";
import Calculator from "@/components/Calculator";

export default function BerandaPage() {
  const [filter, setFilter] = useState("Semua");

  const ditampilkan =
    filter === "Semua"
      ? kendaraan
      : kendaraan.filter((k) => k.status === filter);

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setFilter("Semua")} className="rounded-full border px-4 py-1">Semua</button>
          <button onClick={() => setFilter("tersedia")} className="rounded-full border px-4 py-1">Tersedia</button>
          <button onClick={() => setFilter("disewa")} className="rounded-full border px-4 py-1">Disewa</button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {ditampilkan.map((k) => (
            <VehicleCard 
                key={k.id} 
                nama={k.nama} 
                jenis={k.jenis} 
                harga={k.harga} 
                status={k.status} 
                gambar={k.gambar} 
            />
          ))}
        </div>
      </div>

      <Calculator />
      <Footer />
    </div>
  );
}