import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "Gizlilik Politikası — Günaydın Export",
};

export default function GizlilikPage() {
  return (
    <LegalPage title="Gizlilik Politikası" lastUpdated="7 Nisan 2025">
      <Section title="1. Veri Sorumlusu">
        <p>
          Bu Gizlilik Politikası, <strong>Günaydın Export</strong> (bundan sonra "Şirket" olarak
          anılacaktır) tarafından işletilen www.gunaydinexport.com web sitesinin kullanıcılarına
          yönelik kişisel verilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
        </p>
        <p>
          Şirketimiz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri
          sorumlusu sıfatıyla hareket etmektedir.
        </p>
      </Section>

      <Section title="2. Toplanan Kişisel Veriler">
        <p>Sitemizi kullandığınızda aşağıdaki kişisel veriler toplanabilir:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ad, soyad, e-posta adresi, telefon numarası</li>
          <li>Teslimat ve fatura adresi bilgileri</li>
          <li>Ödeme bilgileri (kart numarası şifrelenerek saklanır, doğrudan bizde tutulmaz)</li>
          <li>IP adresi, tarayıcı türü, cihaz bilgileri</li>
          <li>Sipariş geçmişi ve alışveriş tercihleri</li>
          <li>Çerezler aracılığıyla toplanan gezinti verileri</li>
        </ul>
      </Section>

      <Section title="3. Kişisel Verilerin Kullanım Amaçları">
        <p>Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Siparişlerin işlenmesi ve teslimatın gerçekleştirilmesi</li>
          <li>Müşteri hizmetleri ve destek sunulması</li>
          <li>Ödeme işlemlerinin güvenli şekilde tamamlanması</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
          <li>Pazarlama ve tanıtım faaliyetleri (açık rıza alınması halinde)</li>
          <li>Site güvenliğinin sağlanması ve dolandırıcılığın önlenmesi</li>
          <li>Kullanıcı deneyiminin iyileştirilmesi</li>
        </ul>
      </Section>

      <Section title="4. Kişisel Verilerin Paylaşımı">
        <p>
          Kişisel verileriniz; kargo ve lojistik şirketleri, ödeme altyapı sağlayıcıları, yasal
          yükümlülükler kapsamında yetkili kamu kurumları ve mahkemeler ile hizmet aldığımız
          teknoloji altyapı sağlayıcıları ile paylaşılabilir.
        </p>
        <p>
          Kişisel verileriniz üçüncü şahıslara ticari amaçla satılmaz, kiralanmaz veya
          devredilmez.
        </p>
      </Section>

      <Section title="5. Veri Saklama Süresi">
        <p>
          Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca ve hizmet ilişkisinin
          sona ermesinden itibaren yasal süreler dolana kadar saklanır. Ticari kayıtlar 10 yıl,
          müşteri şikayetleri 3 yıl süreyle muhafaza edilir.
        </p>
      </Section>

      <Section title="6. Veri Güvenliği">
        <p>
          Kişisel verilerinizin korunması için SSL şifreleme, güvenli ödeme altyapısı ve erişim
          kontrolü gibi teknik ve idari tedbirler alınmaktadır. Ödeme bilgileriniz PCI-DSS
          uyumlu altyapılar aracılığıyla işlenmekte olup kart bilgileriniz sistemlerimizde
          saklanmamaktadır.
        </p>
      </Section>

      <Section title="7. Kullanıcı Hakları">
        <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenen verileriniz hakkında bilgi talep etme</li>
          <li>Verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
          <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
          <li>İşleme itiraz etme ve zararın giderilmesini talep etme</li>
        </ul>
        <p>
          Bu haklarınızı kullanmak için{" "}
          <a href="mailto:info@gunaydinexport.com" className="text-rose-500 hover:underline">
            info@gunaydinexport.com
          </a>{" "}
          adresine e-posta gönderebilirsiniz.
        </p>
      </Section>

      <Section title="8. İletişim">
        <p>
          Gizlilik politikamıza ilişkin sorularınız için:
          <br />
          <strong>Günaydın Export</strong>
          <br />
          E-posta:{" "}
          <a href="mailto:info@gunaydinexport.com" className="text-rose-500 hover:underline">
            info@gunaydinexport.com
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
