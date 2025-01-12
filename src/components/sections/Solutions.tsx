const solutions = [
  {
    icon: '👩‍⚕️',
    description: 'Dibuat oleh Terapis Wicara yang terbukti berhasil bantu jutaan anak Indonesia bicara.',
  },
  {
    icon: '🖼️',
    description: 'Fitur visual yang menarik di setiap kata, bantu anak belajar lebih cepat dan seru.',
  },
  {
    icon: '📽️',
    description: 'Ada video tutorial dan panduan penggunaan buku untuk menstimulasi anak dirumah.',
  },
  {
    icon: '🛡️',
    description: 'Cocok untuk anak usia 1 tahun ke atas dan anak dengan learning diversities.',
  }
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue to-secondary-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apa Yang Membuat Buku Birru Play Berbeda?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <p className="text-gray-700 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}