import { Book, Gift } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Card } from '../ui/card';

export function Specifications() {
  const specs = [
    { feature: "Jenis Buku", value: "Boardbook" },
    { feature: "Jenis Cover", value: "Hardcover lapisan dalam spons, Laminasi doff, Spot UV" },
    { feature: "Isi Buku", value: "Double ivory, Laminasi glossy, Full color" },
    { feature: "Sudut", value: "Rounded" },
    { feature: "Ukuran", value: "15 x 15 cm" },
    { feature: "Tebal", value: "24 halaman" },
    { feature: "Berat", value: "-+ 240 gr" }
  ];

  const bonuses = [
    "Buku Boardbook berkualitas tinggi dengan 24 halaman penuh warna",
    "Panduan lengkap penggunaan buku",
    "Akses eksklusif ke video aktivitas penggunaan buku",
    "Bonus: E-book '50 Aktivitas Seru untuk Meningkatkan Kemampuan Bahasa Anak'",
    "Garansi 30 hari uang kembali jika tidak puas"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <Book className="w-4 h-4" />
            <span className="text-sm font-medium">Spesifikasi Produk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lihat Bagaimana Buku Ini Aman & Awet
          </h2>
        </div>

        <Card className="mb-12 overflow-hidden">
          <Table>
            <TableBody>
              {specs.map((spec, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium w-1/3">{spec.feature}</TableCell>
                  <TableCell>{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">Penawaran Spesial Hari Ini!</span>
          </div>
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Dapatkan Birru Play sekarang dan nikmati:
          </h3>
          <ul className="space-y-4">
            {bonuses.map((bonus, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-primary-100 rounded-full p-1 mt-1">
                  <Gift className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700">{bonus}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}