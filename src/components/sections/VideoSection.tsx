export default function VideoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Video Intro</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Lihat Bagaimana Buku Ini Bekerja
          </h2>
        </div>

        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-[500px] rounded-xl"
            src="https://www.youtube.com/embed/7VmygTV80kE"
            title="Birru Play Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}