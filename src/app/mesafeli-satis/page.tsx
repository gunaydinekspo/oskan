import LegalPage, { Section } from "@/components/LegalPage";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi — Günaydın Export",
};

export default function MesafeliSatisPage() {
  return (
    <LegalPage title="Mesafeli Satış Sözleşmesi" lastUpdated="7 Nisan 2025">
      <p className="text-sm bg-blue-50 border border-blue-100 rounded-xl p-4 text-blue-700">
        Bu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler
        Yönetmeliği kapsamında düzenlenmiştir.
      </p>

      <Section title="1. Taraflar">
        <p>
          <strong>SATICI:</strong>
          <br />
          Ünvan: Günaydın Export
          <br />
          E-posta: info@gunaydinexport.com
          <br />
          Web: www.gunaydinexport.com
        </p>
        <p>
          <strong>ALICI:</strong> Sipariş esnasında sisteme kayıtlı bilgileri kullanılan müşteri.
        </p>
      </Section>

      <Section title="2. Konu">
        <p>
          İşbu sözleşme, ALICI'nın SATICI'ya ait internet sitesi üzerinden elektronik ortamda
          siparişini verdiği, sözleşmede belirtilen niteliklere sahip ürün(ler)in satışı ve
          teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
          Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerini
          kapsamaktadır.
        </p>
      </Section>

      <Section title="3. Sözleşme Konusu Ürün / Ödeme Bilgileri">
        <p>
          Ürünün temel özellikleri, satış fiyatı, ödeme şekli ve teslimat bilgileri sipariş
          esnasında ALICI'ya gösterilmekte ve ALICI tarafından onaylanmaktadır. Sipariş özeti
          ve sözleşme metni, sipariş tamamlandıktan sonra ALICI'nın e-posta adresine
          gönderilmektedir.
        </p>
        <p>Ürün fiyatlarına KDV dahildir.</p>
      </Section>

      <Section title="4. Teslimat Bilgileri">
        <p>
          Ürün, ALICI'nın sipariş esnasında belirttiği teslimat adresine, siparişin onaylanmasını
          takiben 1-3 iş günü içinde kargoya teslim edilir. Kargo süresi 2-5 iş günüdür.
          Stokta olmayan ürünler için ALICI bilgilendirilir.
        </p>
        <p>
          Teslimat, ALICI'nın sipariş formunda belirttiği kişiye ve adrese yapılır. ALICI
          tarafından yanlış adres bildirilmesi veya teslim alınmaması durumunda doğabilecek
          masraflar ALICI'ya aittir.
        </p>
      </Section>

      <Section title="5. Cayma Hakkı">
        <p>
          ALICI, sözleşmenin kurulmasından itibaren <strong>14 (on dört) gün</strong> içinde
          herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma
          hakkına sahiptir.
        </p>
        <p>Cayma hakkının kullanılabilmesi için aşağıdaki koşulların sağlanması gerekir:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ürünün kullanılmamış, yıkanmamış ve orijinal etiketleri üzerinde olması</li>
          <li>Orijinal ambalajının açılmamış veya zarar görmemiş olması</li>
          <li>Cayma bildiriminin 14 günlük süre içinde iletilmesi</li>
        </ul>
        <p>
          Cayma hakkı kullanımında, ürün bedelinin tamamı iade edilir. Cayma hakkı kapsamındaki
          iade kargo bedeli SATICI tarafından karşılanır.
        </p>
      </Section>

      <Section title="6. Cayma Hakkının Kullanılamayacağı Haller">
        <p>
          Aşağıdaki ürünlerde cayma hakkı kullanılamaz:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fiyatı finansal piyasalardaki dalgalanmalara bağlı ürünler</li>
          <li>ALICI'nın isteği doğrultusunda özel olarak üretilen veya kişiselleştirilen ürünler</li>
          <li>Ambalajı açılmış; hijyen ve sağlık açısından iadeye uygun olmayan ürünler</li>
          <li>İndirilmiş yazılım, dijital içerik gibi elektronik ortamda sunulan ürünler</li>
        </ul>
      </Section>

      <Section title="7. İade Prosedürü">
        <p>
          Cayma hakkını kullanmak isteyen ALICI, iade talebini{" "}
          <a href="mailto:iade@gunaydinexport.com" className="text-rose-500 hover:underline">
            iade@gunaydinexport.com
          </a>{" "}
          adresine e-posta yoluyla iletebilir. SATICI, iade talebini aldıktan sonra 3 iş günü
          içinde dönüş yapar. Ürün iade alındıktan sonra 14 gün içinde ödeme iadesi
          gerçekleştirilir.
        </p>
      </Section>

      <Section title="8. Gizlilik">
        <p>
          ALICI'ya ait kişisel bilgiler, Gizlilik Politikası ve KVKK Aydınlatma Metni
          kapsamında işlenir. Kişisel bilgiler üçüncü şahıslara satılmaz veya kiralanmaz.
        </p>
      </Section>

      <Section title="9. Uyuşmazlık Çözümü">
        <p>
          İşbu sözleşmeden doğan uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri yetkilidir.
          Tüketici şikayetleri için İl veya İlçe Tüketici Hakem Heyetlerine başvurulabilir.
          Bilge Tüketici platformu üzerinden de şikayetlerinizi iletebilirsiniz.
        </p>
      </Section>

      <Section title="10. Yürürlük">
        <p>
          ALICI, sipariş vermeden önce bu sözleşmeyi okuduğunu ve içeriği hakkında bilgi sahibi
          olduğunu kabul eder. Sözleşme, sipariş onayı ile birlikte yürürlüğe girer.
        </p>
      </Section>
    </LegalPage>
  );
}
