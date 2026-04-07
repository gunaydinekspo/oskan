import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "Beden Rehberi — Günaydın Export",
};

export default function BedenRehberiPage() {
  return (
    <LegalPage title="Beden Rehberi" lastUpdated="7 Nisan 2025">
      <p className="text-sm bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-700">
        Doğru bedeni bulmak için ölçülerinizi dik pozisyonda, esnek bir mezura ile alın.
        Ölçüleriniz iki beden arasındaysa büyük bedeni tercih etmenizi öneririz.
      </p>

      <Section title="Nasıl Ölçü Alınır?">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Göğüs:</strong> Mezurayı kolların altından geçirerek göğsün en geniş noktasından ölçün.</li>
          <li><strong>Bel:</strong> Belinin en ince noktasından, göbeğin hemen üstünden ölçün.</li>
          <li><strong>Kalça:</strong> Kalçanın en geniş noktasından ölçün.</li>
          <li><strong>Boy:</strong> Topuksuz, dik pozisyonda ölçün.</li>
        </ul>
      </Section>

      <Section title="Üst Giyim — Bluz, Gömlek, Kazak">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-700 font-semibold text-xs">
                <th className="p-3 text-left">Beden</th>
                <th className="p-3 text-center">Göğüs (cm)</th>
                <th className="p-3 text-center">Bel (cm)</th>
                <th className="p-3 text-center">Kalça (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
              {[
                ["XS", "78–82", "60–64", "86–90"],
                ["S", "82–86", "64–68", "90–94"],
                ["M", "86–90", "68–72", "94–98"],
                ["L", "90–96", "72–78", "98–104"],
                ["XL", "96–102", "78–84", "104–110"],
                ["XXL", "102–110", "84–92", "110–118"],
              ].map(([beden, gogus, bel, kalca]) => (
                <tr key={beden}>
                  <td className="p-3 font-bold text-gray-900">{beden}</td>
                  <td className="p-3 text-center">{gogus}</td>
                  <td className="p-3 text-center">{bel}</td>
                  <td className="p-3 text-center">{kalca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Alt Giyim — Etek, Pantolon, Elbise">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-700 font-semibold text-xs">
                <th className="p-3 text-left">Beden</th>
                <th className="p-3 text-center">Bel (cm)</th>
                <th className="p-3 text-center">Kalça (cm)</th>
                <th className="p-3 text-center">İç Uzunluk (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
              {[
                ["XS", "60–64", "86–90", "76"],
                ["S", "64–68", "90–94", "77"],
                ["M", "68–72", "94–98", "78"],
                ["L", "72–78", "98–104", "79"],
                ["XL", "78–84", "104–110", "80"],
                ["XXL", "84–92", "110–118", "80"],
              ].map(([beden, bel, kalca, uzunluk]) => (
                <tr key={beden}>
                  <td className="p-3 font-bold text-gray-900">{beden}</td>
                  <td className="p-3 text-center">{bel}</td>
                  <td className="p-3 text-center">{kalca}</td>
                  <td className="p-3 text-center">{uzunluk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Jean Beden Tablosu">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50 text-gray-700 font-semibold text-xs">
                <th className="p-3 text-left">Jean Beden</th>
                <th className="p-3 text-center">Bel (cm)</th>
                <th className="p-3 text-center">Türk Beden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-600">
              {[
                ["25", "60–62", "XS"],
                ["26", "62–65", "XS–S"],
                ["27", "65–68", "S"],
                ["28", "68–71", "S–M"],
                ["29", "71–74", "M"],
                ["30", "74–77", "M–L"],
                ["31", "77–80", "L"],
                ["32", "80–84", "L–XL"],
              ].map(([jean, bel, turk]) => (
                <tr key={jean}>
                  <td className="p-3 font-bold text-gray-900">{jean}</td>
                  <td className="p-3 text-center">{bel}</td>
                  <td className="p-3 text-center">{turk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Ölçü Alma İpuçları">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Ölçüleri ince bir iç çamaşırı üzerinde alın, kalın kıyafetler üzerinde almayın.</li>
          <li>Mezurayı çok sıkmadan, vücuda paralel tutun.</li>
          <li>Boyunuza göre paça uzunluğu farklı çıkabilir; kısa boylu iseniz daha kısa paçalı modelleri tercih edin.</li>
          <li>Ürün sayfasındaki &quot;model ölçüleri&quot; bilgisini referans alabilirsiniz.</li>
        </ul>
      </Section>

      <Section title="Hâlâ Emin Değil misiniz?">
        <p>
          Doğru bedeni seçmekte zorlanıyorsanız müşteri hizmetlerimizle iletişime geçin, size yardımcı olalım.
        </p>
        <a
          href="/yardim/iletisim"
          className="inline-block mt-2 px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          Bize Ulaşın
        </a>
      </Section>
    </LegalPage>
  );
}
