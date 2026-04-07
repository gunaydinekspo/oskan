import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "KVKK Aydınlatma Metni — Günaydın Export",
};

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" lastUpdated="7 Nisan 2025">
      <p className="text-sm bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-700">
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca
        hazırlanmıştır.
      </p>

      <Section title="1. Veri Sorumlusu">
        <p>
          Kişisel verileriniz, veri sorumlusu sıfatıyla <strong>Günaydın Export</strong> tarafından
          aşağıda açıklanan amaçlar doğrultusunda işlenmektedir.
        </p>
      </Section>

      <Section title="2. Kişisel Verilerin İşlenme Amaçları">
        <p>
          Kişisel verileriniz aşağıdaki amaçlarla KVKK'nın 5. ve 6. maddeleri uyarınca
          işlenmektedir:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Mesafeli satış sözleşmesinin kurulması ve ifası</li>
          <li>Sipariş süreçlerinin yönetimi ve kargo takibi</li>
          <li>Fatura ve muhasebe işlemlerinin yürütülmesi</li>
          <li>Müşteri memnuniyetinin ölçülmesi ve şikayetlerin çözümlenmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>İletişim faaliyetlerinin yürütülmesi</li>
          <li>Ürün ve hizmetlerin pazarlanması (açık rıza ile)</li>
        </ul>
      </Section>

      <Section title="3. İşlenen Kişisel Veri Kategorileri">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Kimlik:</strong> Ad, soyad</li>
          <li><strong>İletişim:</strong> E-posta, telefon, adres</li>
          <li><strong>Finansal:</strong> Ödeme bilgileri, fatura bilgileri</li>
          <li><strong>İşlem Güvenliği:</strong> IP adresi, çerez verileri</li>
          <li><strong>Müşteri İşlem:</strong> Sipariş geçmişi, iade talepleri</li>
          <li><strong>Pazarlama:</strong> Alışveriş tercihleri (rıza ile)</li>
        </ul>
      </Section>

      <Section title="4. Kişisel Verilerin Aktarıldığı Taraflar ve Aktarım Amaçları">
        <p>Kişisel verileriniz aşağıdaki taraflarla paylaşılabilir:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Kargo/Lojistik Şirketleri:</strong> Siparişlerin teslimatı amacıyla
          </li>
          <li>
            <strong>Ödeme Kuruluşları:</strong> Ödeme işlemlerinin güvenli şekilde tamamlanması
            amacıyla
          </li>
          <li>
            <strong>Yetkili Kamu Kurum ve Kuruluşları:</strong> Yasal yükümlülükler kapsamında
          </li>
          <li>
            <strong>Hizmet Sağlayıcılar:</strong> Teknoloji altyapısı ve bulut hizmetleri amacıyla
          </li>
        </ul>
      </Section>

      <Section title="5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi">
        <p>
          Kişisel verileriniz; web sitemiz, mobil uygulamalar, e-posta, telefon ve yazılı formlar
          aracılığıyla toplanmaktadır. Hukuki sebepler:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Sözleşmenin kurulması veya ifasına bağlı zorunluluk</li>
          <li>Şirketin hukuki yükümlülüklerini yerine getirmesi</li>
          <li>Şirketin meşru menfaatlerinin korunması</li>
          <li>Açık rıza (pazarlama faaliyetleri için)</li>
        </ul>
      </Section>

      <Section title="6. KVKK Kapsamındaki Haklarınız">
        <p>
          KVKK'nın 11. maddesi uyarınca veri sorumlusuna başvurarak aşağıdaki haklarınızı
          kullanabilirsiniz:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>KVKK'nın 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme</li>
          <li>Otomatik sistemler vasıtasıyla aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
          <li>Kanuna aykırı işleme nedeniyle uğradığı zararın giderilmesini talep etme</li>
        </ul>
      </Section>

      <Section title="7. Başvuru Yolu">
        <p>
          Haklarınızı kullanmak için yazılı başvurunuzu{" "}
          <a href="mailto:kvkk@gunaydinexport.com" className="text-rose-500 hover:underline">
            kvkk@gunaydinexport.com
          </a>{" "}
          adresine iletebilirsiniz. Başvurunuz en geç 30 gün içinde sonuçlandırılacaktır.
          Başvurunuzda ad-soyad, TC kimlik numarası, iletişim bilgileri ve talebinizin açık
          ifadesinin yer alması gerekmektedir.
        </p>
      </Section>
    </LegalPage>
  );
}
