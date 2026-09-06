import { kendaraan } from "@/app/data";
import Link from "next/link";
import Image, { img } from "next/image";

export default function VehicleCard({ id, nama, jenis, harga, status, gambar }) {
  return (
    <div className="rounded-xl border p-4">
      <Link href={`/kendaraan/${id}`} className="block rounded-xl border p-4 transition hover:shadow-md"></Link>
      <img
        src={gambar}
        alt={nama}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <div className="flex items-start justify-between">
        <h3 className="font-bold">{nama}</h3>
        <span
          className={
            status === "tersedia"
              ? "text-xs rounded-full bg-green-100 text-green-700 px-2 py-1"
              : "text-xs rounded-full bg-red-100 text-red-700 px-2 py-1"
          }
        >
          {status === "tersedia" ? "Tersedia" : "Disewa"}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{jenis}</p>
      <p className="font-semibold mt-2">Rp{harga.toLocaleString("id-ID")}/hari</p>
    </div>

    
  );
}