import { Table, TableBody, TableCell, TableRow } from '../ui/table';

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

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Spesifikasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lihat Bagaimana Buku Ini Aman & Awet
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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
        </div>
      </div>
    </section>
  );
}