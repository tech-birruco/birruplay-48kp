const images = [
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%201.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%202.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%203.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%204.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%205.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%206.png?raw=true',
  'https://github.com/tech-birruco/birruplay-48kp/blob/main/src/public/assets/%20Slide%207.png?raw=true',
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Galeri Produk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bagimana Buku Birru Play Menarik
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((src, index) => (
            <div className="aspect-square relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}