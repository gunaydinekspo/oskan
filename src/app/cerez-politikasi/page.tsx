import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "Çerez Politikası — Günaydın Export",
};

export default function CerezPolitikasiPage() {
  return (
    <LegalPage title="Çerez Politikası" lastUpdated="7 Nisan 2025">
      <Section title="1. Çerez Nedir?">
        <p>
          Çerezler (cookies), web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır.
          Sizi tanımamıza, tercihlerinizi hatırlamamıza ve site deneyiminizi kişiselleştirmemize
          yardımcı olurlar.
        </p>
      </Section>

      <Section title="2. Kullandığımız Çerez Türleri">
        <div className="overflow-x-auto">
          <table className="w-full text-xs border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 font-semibold text-gray-700">Çerez Türü</th>
                <th className="text-left p-3 font-semibold text-gray-700">Amaç</th>
                <th className="text-left p-3 font-semibold text-gray-700">Süre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-3 font-medium text-gray-800">Zorunlu Çerezler</td>
                <td className="p-3 text-gray-600">Sepet, oturum yönetimi, güvenlik</td>
                <td className="p-3 text-gray-600">Oturum süresi</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-800">İşlevsel Çerezler</td>
                <td className="p-3 text-gray-600">Dil, bölge, kullanıcı tercihleri</td>
                <td className="p-3 text-gray-600">1 yıl</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-800">Analitik Çerezler</td>
                <td className="p-3 text-gray-600">Site trafiği ve kullanım istatistikleri</td>
                <td className="p-3 text-gray-600">2 yıl</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-800">Pazarlama Çerezleri</td>
                <td className="p-3 text-gray-600">Kişiselleştirilmiş reklam (rıza ile)</td>
                <td className="p-3 text-gray-600">90 gün</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="3. Zorunlu Çerezler">
        <p>
          Zorunlu çerezler sitenin düzgün çalışması için gereklidir. Sepetiniz, oturum bilgileriniz
          ve güvenlik doğrulamaları bu çerezler aracılığıyla yönetilir. Bu çerezler devre dışı
          bırakılamaz; ancak tarayıcınızı tüm çerezleri reddedecek şekilde ayarlayabilirsiniz
          (bu durumda site işlevleri kısıtlanabilir).
        </p>
      </Section>

      <Section title="4. Analitik Çerezler">
        <p>
          Sitemizi nasıl kullandığınızı anlamak için Google Analytics gibi araçları kullanıyoruz.
          Bu çerezler anonim istatistikler toplar ve kişisel olarak sizi tanımlamaz. Analitik
          çerezleri tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz.
        </p>
      </Section>

      <Section title="5. Çerezleri Yönetme">
        <p>Çerezleri aşağıdaki yollarla yönetebilirsiniz:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Tarayıcı Ayarları:</strong> Chrome, Firefox, Safari ve Edge tarayıcılarının
            gizlilik ayarlarından çerezleri silebilir veya engelleyebilirsiniz.
          </li>
          <li>
            <strong>Çerez Tercihleri:</strong> Sitemizde yer alan çerez tercih panelinden
            pazarlama ve analitik çerezlere onay verip kaldırabilirsiniz.
          </li>
          <li>
            <strong>Tarayıcı Eklentileri:</strong> Reklam engelleyici eklentiler ile takip
            çerezlerini engelleyebilirsiniz.
          </li>
        </ul>
        <p>
          Çerezleri tamamen devre dışı bırakmak, sepet ve oturum gibi bazı site özelliklerinin
          çalışmamasına yol açabilir.
        </p>
      </Section>

      <Section title="6. Üçüncü Taraf Çerezleri">
        <p>
          Sitemiz; analitik (Google Analytics), ödeme (entegre ödeme sağlayıcıları) ve sosyal
          medya platformlarından üçüncü taraf çerezler içerebilir. Bu çerezler, ilgili
          platformların kendi gizlilik politikalarına tabidir.
        </p>
      </Section>

      <Section title="7. Güncellemeler">
        <p>
          Bu çerez politikası zaman zaman güncellenebilir. Önemli değişiklikler sitede
          duyurulacaktır. Siteyi kullanmaya devam etmeniz, güncel politikayı kabul ettiğiniz
          anlamına gelir.
        </p>
      </Section>

      <Section title="8. İletişim">
        <p>
          Çerez politikasına ilişkin sorularınız için:{" "}
          <a href="mailto:info@gunaydinexport.com" className="text-rose-500 hover:underline">
            info@gunaydinexport.com
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
