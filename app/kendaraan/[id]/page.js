import Link from "next/link";
import { notFound } from "next/navigation";
import { kendaraan } from "@/app/data";

export default async function DetailPage({ params }) {

const id = await params;
  const item = kendaraan.find((k) => k.id === Number(id));
  if (!item) notFound();

  const pesan = `Halo, saya mau booking ${item.nama}`;

  return (
    <div>
        <p>{item.nama}</p>
    </div>
  );
}