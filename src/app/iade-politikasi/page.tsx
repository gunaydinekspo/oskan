import LegalPage, { Section } from "@/components/LegalPage";
import Link from "next/link";

export const metadata = {
  title: "İade ve Değişim Politikası — Günaydın Export",
};

export default function IadePolitikasiPage() {
  return (
    <LegalPage title="İade ve Değişim Politikası" lastUpdated="7 Nisan 2025">
      <Section title="1. İade Hakkı">
        <p>
          Günaydın Export olarak, tüm siparişlerinizde <strong>30 gün iade garantisi</strong>{" "}
          sunuyoruz. Ürünleri teslim aldığınız tarihten itibaren 30 gün içinde iade veya
          değişim talebinde bulunabilirsiniz.
        </p>
        <p>
          Yasal cayma hakkınız teslimattan itibaren <strong>14 gündür</strong>. Biz bu süreyi
          müşteri memnuniyeti adına 30 güne uzatıyoruz.
        </p>
      </Section>

      <Section title="2. İade Koşulları">
        <p>İade kabul edilmesi için aşağıdaki koşulların sağlanması gerekmektedir:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ürün kullanılmamış, yıkanmamış ve ütülenmemiş olmalıdır</li>
          <li>Orijinal etiketleri üzerinde ve ambalajı sağlam olmalıdır</li>
          <li>Hijyenik ürünlerde (iç çamaşırı vb.) ambalaj açılmamış olmalıdır</li>
          <li>Ürünle birlikte fatura veya sipariş belgesi gönderilmelidir</li>
        </ul>
      </Section>

      <Section title="3. İade Kabul Edilmeyen Durumlar">
        <ul className="list-disc pl-5 space-y-1">
          <li>Yıkanmış, ütülenmiş veya kullanılmış ürünler</li>
          <li>Etiketi sökülen veya hasar gören ürünler</li>
          <li>30 gün iade süresini aşmış talepler</li>
          <li>Müşterinin kusuru sonucu zarar gören ürünler</li>
          <li>Hijyen koşulları nedeniyle iadeye uygun olmayan ürünler</li>
        </ul>
      </Section>

      <Section title="4. İade Süreci">
        <p>
          <strong>Adım 1:</strong> İade talebinizi{" "}
          <a href="mailto:iade@gunaydinexport.com" className="text-rose-500 hover:underline">
            iade@gunaydinexport.com
          </a>{" "}
          adresine sipariş numaranız ve iade gerekçenizle birlikte bildirin.
        </p>
        <p>
          <strong>Adım 2:</strong> 1-2 iş günü içinde size iade kargo kodu ve talimatları
          e-posta ile iletilir.
        </p>
        <p>
          <strong>Adım 3:</strong> Ürünü belirtilen adrese gönderin. İade kargo ücreti
          tarafımızdan karşılanır.
        </p>
        <p>
          <strong>Adım 4:</strong> Ürün tarafımıza ulaştıktan ve kontrolden geçtikten sonra
          en geç <strong>14 iş günü</strong> içinde ödemeniz iade edilir.
        </p>
      </Section>

      <Section title="5. Para İadesi">
        <p>
          Para iadesi, ödemenin yapıldığı yöntemle gerçekleştirilir:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Kredi/Banka Kartı:</strong> Kartınıza 3-10 iş günü içinde yansır (bankanıza
            göre değişir)
          </li>
          <li>
            <strong>Havale/EFT:</strong> Belirttiğiniz IBAN'a 3-5 iş günü içinde aktarılır
          </li>
        </ul>
      </Section>

      <Section title="6. Değişim">
        <p>
          Farklı beden veya renk değişimi için aynı iade sürecini takip edebilirsiniz. Değişim
          talebinizi bildirirken istediğiniz beden/rengi belirtmeniz yeterlidir. Stok durumuna
          göre değişim veya iade işlemi yapılır.
        </p>
      </Section>

      <Section title="7. Hasarlı veya Hatalı Ürün">
        <p>
          Hasarlı, defolu veya yanlış ürün teslim edilmesi durumunda ürün fotoğrafını ve sipariş
          numaranızı{" "}
          <a href="mailto:info@gunaydinexport.com" className="text-rose-500 hover:underline">
            info@gunaydinexport.com
          </a>{" "}
          adresine gönderin. Bu tür durumlarda kargo dahil tüm masraflar tarafımızdan karşılanır
          ve öncelikli olarak işleme alınır.
        </p>
      </Section>

      <Section title="8. İletişim">
        <p>
          İade ve değişim sorularınız için:{" "}
          <a href="mailto:iade@gunaydinexport.com" className="text-rose-500 hover:underline">
            iade@gunaydinexport.com
          </a>
        </p>
        <p>
          Mesafeli satış sözleşmesi kapsamındaki haklarınız için{" "}
          <Link href="/mesafeli-satis" className="text-rose-500 hover:underline">
            Mesafeli Satış Sözleşmesi
          </Link>{" "}
          sayfamızı inceleyebilirsiniz.
        </p>
      </Section>
    </LegalPage>
  );
}
