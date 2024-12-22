const solutions = [
  {
    icon: '👩‍⚕️',
    title: 'Didesign oleh Ahli',
    description: 'Dibuat oleh Speech & Language Therapist profesional untuk hasil yang optimal.',
  },
  {
    icon: '🖼️',
    title: 'Visual Representatif',
    description: 'Fitur visual yang menarik di setiap kata, bantu anak belajar lebih cepat dan seru.',
  },
  {
    icon: '📽️',
    title: 'Panduan Lengkap',
    description: 'Termasuk video tutorial dan panduan penggunaan untuk mengoptimalkan manfaat buku.',
  },
  {
    icon: '🛡️',
    title: 'Inklusif',
    description: 'Cocok untuk anak usia 1 tahun ke atas dan anak dengan learning diversities.',
  }
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue to-secondary-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apa Yang Membuat Buku Ini Berbeda?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-700 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}