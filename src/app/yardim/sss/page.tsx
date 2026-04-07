"use client";

import { useState } from "react";
import { ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Sipariş",
    items: [
      {
        q: "Siparişimi nasıl takip edebilirim?",
        a: "Sipariş onay e-postanızdaki kargo takip numarasını kullanarak kargo şirketinin web sitesinden siparişinizi takip edebilirsiniz. Ayrıca hesabınıza giriş yaparak 'Siparişlerim' bölümünden de takip edebilirsiniz.",
      },
      {
        q: "Siparişimi iptal edebilir miyim?",
        a: "Siparişiniz kargoya verilmeden önce iptal talebinde bulunabilirsiniz. Kargoya verildikten sonra iade süreci başlatmanız gerekmektedir. İptal için info@gunaydinexport.com adresine e-posta gönderin.",
      },
      {
        q: "Siparişimin durumunu nasıl öğrenebilirim?",
        a: "Sipariş durumunuz e-posta ile bildirilir. Hazırlanıyor, kargoya verildi ve teslim edildi aşamalarında bilgilendirme yapılır.",
      },
      {
        q: "Aynı anda birden fazla ürün sipariş verebilir miyim?",
        a: "Evet, istediğiniz kadar ürünü sepetinize ekleyerek tek siparişte satın alabilirsiniz. 500 TL ve üzeri siparişlerde kargo ücretsizdir.",
      },
    ],
  },
  {
    category: "Kargo & Teslimat",
    items: [
      {
        q: "Kargo süresi ne kadar?",
        a: "Siparişiniz ödeme onayından itibaren 1-3 iş günü içinde kargoya verilir. Teslimat süresi bölgenize göre 2-5 iş günüdür.",
      },
      {
        q: "Kargo ücreti nedir?",
        a: "500 TL ve üzeri siparişlerde kargo tamamen ücretsizdir. 500 TL altındaki siparişlerde kargo ücreti ödeme aşamasında belirtilir.",
      },
      {
        q: "Hangi kargo şirketiyle çalışıyorsunuz?",
        a: "Siparişleriniz Yurtiçi Kargo, Aras Kargo veya MNG Kargo ile gönderilmektedir. Kargo firması sipariş bazında değişkenlik gösterebilir.",
      },
      {
        q: "Yurt dışına teslimat yapıyor musunuz?",
        a: "Şu an için yalnızca Türkiye içi teslimat yapılmaktadır. Yurt dışı teslimat seçeneği yakında eklenecektir.",
      },
    ],
  },
  {
    category: "İade & Değişim",
    items: [
      {
        q: "Ürünü iade edebilir miyim?",
        a: "Evet, teslim tarihinden itibaren 30 gün içinde kullanılmamış ve orijinal etiketleri üzerinde olan ürünleri iade edebilirsiniz. İade kargo ücreti tarafımızdan karşılanır.",
      },
      {
        q: "İade süreci nasıl işliyor?",
        a: "İade talebinizi iade@gunaydinexport.com adresine sipariş numaranızla bildirin. 1-2 iş günü içinde size iade kargo kodu iletilir. Ürün tarafımıza ulaştıktan sonra 14 iş günü içinde ödemeniz iade edilir.",
      },
      {
        q: "Yanlış beden aldım, değişim yapabilir miyim?",
        a: "Evet, beden değişimi için aynı iade sürecini takip edin. İade talebinizde istediğiniz bedeni belirtin, stok mevcutsa değişim yapılır.",
      },
      {
        q: "Para iadesi ne zaman hesabıma yansır?",
        a: "Ürün kontrolü tamamlandıktan sonra iade işlemi başlatılır. Kredi/banka kartında 3-10 iş günü, havale/EFT ile 3-5 iş günü içinde hesabınıza yansır.",
      },
    ],
  },
  {
    category: "Ödeme",
    items: [
      {
        q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
        a: "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Tüm ödemeler güvenli SSL şifreli altyapı üzerinden alınmaktadır.",
      },
      {
        q: "Taksit seçeneği var mı?",
        a: "Evet, anlaşmalı bankaların kredi kartlarıyla taksitli ödeme yapabilirsiniz. Taksit seçenekleri ödeme sayfasında görüntülenir.",
      },
      {
        q: "Kart bilgilerim güvende mi?",
        a: "Kart bilgileriniz PCI-DSS uyumlu güvenli ödeme altyapısı üzerinden işlenir ve sistemlerimizde saklanmaz. Tüm işlemler SSL şifrelemeyle korunmaktadır.",
      },
    ],
  },
  {
    category: "Ürünler",
    items: [
      {
        q: "Beden tablonuzu nasıl kullanabilirim?",
        a: "Beden Rehberi sayfamızdaki tabloya göre göğüs, bel ve kalça ölçülerinizi alarak size uygun bedeni bulabilirsiniz. İki beden arasındaysanız büyük bedeni tercih etmenizi öneririz.",
      },
      {
        q: "Ürün rengi fotoğraftakiyle aynı mı?",
        a: "Ürün fotoğrafları gerçeği en iyi şekilde yansıtmak için profesyonel ortamda çekilmiştir. Ancak ekran ayarlarına bağlı olarak hafif renk farklılıkları görülebilir.",
      },
      {
        q: "Stokta olmayan ürün için ne yapabilirim?",
        a: "Stokta olmayan ürünlerde 'Beni Bilgilendir' butonuna tıklayarak e-posta adresinizi bırakabilirsiniz. Ürün tekrar stoka girdiğinde size bildirim gönderilir.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-800">{q}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white text-sm text-gray-600 leading-relaxed border-t border-gray-50">
          <p className="pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function SSSPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-rose-500 transition-colors mb-8"
      >
        <ChevronLeft size={16} /> Ana Sayfaya Dön
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Sık Sorulan Sorular</h1>
        <p className="mt-2 text-gray-500">Aradığınızı bulamadıysanız bize ulaşın.</p>
      </div>

      <div className="space-y-10">
        {faqs.map((group) => (
          <div key={group.category}>
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
              {group.category}
            </h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-rose-50 rounded-2xl p-8 text-center">
        <h3 className="font-bold text-gray-900 mb-2">Sorunuzu bulamadınız mı?</h3>
        <p className="text-gray-500 text-sm mb-5">Müşteri hizmetlerimiz size yardımcı olmaktan mutluluk duyar.</p>
        <Link
          href="/yardim/iletisim"
          className="inline-block px-7 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-full transition-colors text-sm"
        >
          Bize Ulaşın
        </Link>
      </div>
    </div>
  );
}
