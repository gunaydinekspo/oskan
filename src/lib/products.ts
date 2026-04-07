export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
}

export const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "elbise", label: "Elbise" },
  { id: "bluz", label: "Bluz & Gömlek" },
  { id: "pantolon", label: "Pantolon & Jean" },
  { id: "etek", label: "Etek" },
  { id: "dis-giyim", label: "Dış Giyim" },
  { id: "triko", label: "Triko & Kazak" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Çiçek Desenli Midi Elbise",
    price: 649,
    originalPrice: 899,
    category: "elbise",
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
    ],
    description: "Zarif çiçek deseniyle her ortamda şıklığınızı tamamlayan midi boy elbise. Nefes alan dokuma kumaşı sayesinde gün boyu rahat hissettirirken, ince beli vurgulayan kesimi ile siluetinizi mükemmel gösterir.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pembe", "Mavi", "Krem"],
    badge: "İndirim",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Oversize Keten Gömlek",
    price: 429,
    category: "bluz",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4a8b0f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4a8b0f?w=600&q=80",
    ],
    description: "Doğal keten kumaşından üretilen oversize gömlek, hem günlük hem de ofis kombinleri için idealdir. Rahat kalıbı ve nefes alan yapısıyla tüm gün konfor sağlar.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beyaz", "Ekru", "Açık Mavi"],
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "Yüksek Bel Mom Jean",
    price: 799,
    originalPrice: 999,
    category: "pantolon",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    ],
    description: "Klasik mom jean kesimi, yüksek beli ve rahat paça yapısıyla her vücut tipine uyum sağlar. Dayanıklı denim kumaşıyla uzun yıllar kullanım garantisi.",
    sizes: ["25", "26", "27", "28", "29", "30", "31", "32"],
    colors: ["Açık Mavi", "Koyu Mavi", "Siyah"],
    badge: "Çok Satan",
    rating: 4.9,
    reviewCount: 256,
  },
  {
    id: 4,
    name: "Pileli Mini Etek",
    price: 349,
    category: "etek",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
    ],
    description: "Şık pileli yapısıyla hem ofis hem de günlük kombinlere uygun mini etek. Yüksek beli beli inceltirken, hareket kabiliyetinizi kısıtlamaz.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Siyah", "Krem", "Çikolata"],
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: 5,
    name: "Kaşmir Dokulu Kazak",
    price: 899,
    originalPrice: 1299,
    category: "triko",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    ],
    description: "Premium kaşmir dokunuşuyla hazırlanan bu kazak, soğuk günlerde sizi sıcak tutarken şıklığınızdan ödün vermez. Yumuşak ve hafif yapısıyla gün boyu konfor.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Krem", "Gri", "Siyah"],
    badge: "Yeni",
    rating: 4.7,
    reviewCount: 43,
  },
  {
    id: 6,
    name: "Trençkot",
    price: 1499,
    category: "dis-giyim",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    ],
    description: "Zamansız stil simgesi trençkot, kaliteli kumaşı ve mükemmel kesimi ile her kombinin üzerine giyilebilir. Hem yağmura hem de rüzgara karşı koruma sağlar.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Bej", "Siyah", "Lacivert"],
    rating: 4.9,
    reviewCount: 178,
  },
  {
    id: 7,
    name: "Saten Slip Elbise",
    price: 549,
    originalPrice: 749,
    category: "elbise",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    ],
    description: "İpeksi saten kumaşından üretilen slip elbise, gece davetleri için mükemmel seçim. İnce askıları ve vücut hatlarını ortaya koyan kesimi ile büyüleyici bir görünüm sunar.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Şampanya", "Siyah", "Pembe"],
    badge: "İndirim",
    rating: 4.6,
    reviewCount: 95,
  },
  {
    id: 8,
    name: "Crop Deri Ceket",
    price: 1299,
    category: "dis-giyim",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    ],
    description: "Suni deri crop ceket, her kombinle uyum sağlayan edgy tarzıyla gardırobunuzun vazgeçilmezi olacak. Rahat kalıbı ve metalik detaylarıyla fark yaratır.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Siyah", "Bordo"],
    badge: "Yeni",
    rating: 4.8,
    reviewCount: 62,
  },
  {
    id: 9,
    name: "Loose Fit Kargo Pantolon",
    price: 699,
    category: "pantolon",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4a8b0f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4a8b0f?w=600&q=80",
    ],
    description: "Pratik cepleri ve rahat kesimi ile günlük kullanım için ideal. Street style ilham alınarak tasarlanan bu pantolon, spor ve şık kombinlere mükemmel uyum sağlar.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Kargo Yeşil", "Bej", "Siyah"],
    rating: 4.4,
    reviewCount: 38,
  },
  {
    id: 10,
    name: "Fırfırlı Bluz",
    price: 379,
    originalPrice: 499,
    category: "bluz",
    image: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
    ],
    description: "Romantik fırfır detaylarıyla feminen bir görünüm sunan bu bluz, hem jean hem de etek ile kolayca kombin yapılabilir. Nefes alan viskon kumaşı ile gün boyu taze hissettiriri.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beyaz", "Pudra", "Siyah"],
    badge: "İndirim",
    rating: 4.5,
    reviewCount: 81,
  },
  {
    id: 11,
    name: "Midi Kalem Etek",
    price: 449,
    category: "etek",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    ],
    description: "Ofis şıklığını sokak modasıyla birleştiren midi kalem etek. Tam beden oturan kesimi ve esnek kumaşıyla hem estetik hem de konforlu.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Lacivert", "Siyah", "Camel"],
    rating: 4.7,
    reviewCount: 114,
  },
  {
    id: 12,
    name: "Oversize Yün Ceket",
    price: 1199,
    originalPrice: 1599,
    category: "dis-giyim",
    image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&q=80",
    ],
    description: "Premium yün karışımlı kumaştan üretilen oversize ceket, soğuk günlerin vazgeçilmezi. Geniş kesimi katmanlı kombinlere olanak tanırken şık görünümünüzü tamamlar.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Gri", "Krem"],
    badge: "İndirim",
    rating: 4.8,
    reviewCount: 92,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "tumu") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge).slice(0, 4);
}
