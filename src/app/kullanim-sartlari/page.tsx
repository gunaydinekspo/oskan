import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "Kullanım Şartları — Günaydın Export",
};

export default function KullanimSartlariPage() {
  return (
    <LegalPage title="Kullanım Şartları" lastUpdated="7 Nisan 2025">
      <Section title="1. Genel Hükümler">
        <p>
          Bu Kullanım Şartları, <strong>Günaydın Export</strong> tarafından işletilen web sitesini
          kullanan tüm ziyaretçi ve müşteriler için geçerlidir. Siteyi kullanarak bu şartları
          kabul etmiş sayılırsınız.
        </p>
        <p>
          Günaydın Export, bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar.
          Değişiklikler sitede yayımlandığı andan itibaren geçerlilik kazanır.
        </p>
      </Section>

      <Section title="2. Üyelik ve Hesap">
        <p>
          Sitemizde alışveriş yapabilmek için hesap oluşturmanız veya misafir olarak ödeme
          yapmanız gerekmektedir. Hesap oluştururken verdiğiniz bilgilerin doğru ve güncel
          olmasından siz sorumlusunuz.
        </p>
        <p>
          Hesap güvenliğinizi sağlamak için şifrenizi kimseyle paylaşmamanız ve şüpheli
          durumlarda bize bildirmeniz gerekmektedir. Hesabınızla gerçekleştirilen tüm işlemlerden
          siz sorumlusunuz.
        </p>
      </Section>

      <Section title="3. Sipariş ve Sözleşme Kurulması">
        <p>
          Sitemiz üzerinden verilen siparişler, tarafımızca onaylandığı anda bağlayıcı nitelik
          kazanır. Sipariş onayı e-posta yoluyla bildirilir. Stok yetersizliği veya fiyat
          hatası gibi durumlarda siparişi iptal etme hakkımız saklıdır.
        </p>
        <p>
          Ürün fiyatları KDV dahil olarak gösterilmektedir. Kampanya ve indirimler belirtilen
          süre veya stok ile sınırlıdır.
        </p>
      </Section>

      <Section title="4. Ödeme">
        <p>
          Ödemeler güvenli ödeme altyapısı üzerinden alınmaktadır. Kabul edilen ödeme yöntemleri:
          kredi kartı, banka kartı ve havale/EFT. Ödeme bilgileriniz şifrelenerek iletilir ve
          sistemlerimizde saklanmaz.
        </p>
        <p>
          Taksit seçenekleri bankanıza ve kart tipinize göre değişebilir. Taksit bilgileri ödeme
          aşamasında gösterilir.
        </p>
      </Section>

      <Section title="5. Teslimat">
        <p>
          Siparişler, ödeme onayından itibaren 1-3 iş günü içinde kargoya verilir. Teslimat
          süresi kargo şirketine ve bölgeye göre değişmekle birlikte genellikle 2-5 iş günüdür.
        </p>
        <p>
          500 TL ve üzeri siparişlerde kargo ücretsizdir. Bu tutarın altındaki siparişlerde
          kargo bedeli ödeme aşamasında bildirilir.
        </p>
      </Section>

      <Section title="6. Fikri Mülkiyet">
        <p>
          Sitedeki tüm içerikler (metin, görsel, logo, tasarım) Günaydın Export'a aittir ve
          telif hakkı yasalarıyla korunmaktadır. İzin alınmadan kopyalanamaz, çoğaltılamaz veya
          dağıtılamaz.
        </p>
      </Section>

      <Section title="7. Sorumluluk Sınırlaması">
        <p>
          Günaydın Export, teknik arızalar, internet kesintileri veya üçüncü taraf kaynaklı
          sorunlardan doğan doğrudan ya da dolaylı zararlardan sorumlu tutulamaz. Ürün
          fotoğrafları temsilidir; gerçek ürün rengi ekrandan farklı görünebilir.
        </p>
      </Section>

      <Section title="8. Uygulanacak Hukuk ve Yetkili Mahkeme">
        <p>
          Bu Kullanım Şartları Türk Hukuku'na tabidir. Uyuşmazlıklarda Türkiye'deki tüketici
          hakem heyetleri ve tüketici mahkemeleri yetkilidir.
        </p>
      </Section>

      <Section title="9. İletişim">
        <p>
          Kullanım şartlarına ilişkin sorularınız için:{" "}
          <a href="mailto:info@gunaydinexport.com" className="text-rose-500 hover:underline">
            info@gunaydinexport.com
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
