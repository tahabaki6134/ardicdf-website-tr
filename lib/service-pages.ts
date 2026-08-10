export type ServiceFaq = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  production: string[];
  methods: string[];
  applications: string[];
  process: string[];
  relatedProjects: { href: string; label: string }[];
  relatedServices: { href: string; label: string }[];
  faqs: ServiceFaq[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "cnc-strafor-isleme",
    title: "CNC Strafor İşleme İstanbul",
    metaTitle: "CNC Strafor İşleme İstanbul | EPS & XPS CNC | Ardıç",
    description: "İstanbul'da EPS ve XPS bloklar için CNC strafor kesim, 3D köpük işleme, model, heykel, kalıp ve mimari dekor üretimi.",
    eyebrow: "Dijital Üretim",
    summary: "Ardıç Design & Fabrication, İstanbul'daki üretim atölyesinde EPS ve XPS köpükleri CNC ile iki ve üç boyutlu işler. Süreç; heykel, maket, kalıp, rölyef, sahne dekoru ve büyük ölçekli özel üretimler için kontrollü ve tekrarlanabilir formlar sağlar.",
    production: ["Üç boyutlu strafor heykel ve obje", "Mimari rölyef, kolon ve cephe detayları", "Kalıp modeli ve prototip", "Sahne, fuar ve etkinlik dekor elemanları"],
    methods: ["EPS ve XPS blok işleme", "Dijital modelden CNC takım yolu hazırlama", "Parçalı üretim ve ölçekli birleştirme", "İhtiyaca göre kaplama, zımpara ve boya hazırlığı"],
    applications: ["AVM ve mağaza uygulamaları", "Tema park ve deneyim alanları", "Mimari dekorasyon", "Reklam, etkinlik ve sahne projeleri"],
    process: ["Proje briefi ve dijital dosyanın incelenmesi", "Malzeme ve parçalara ayırma planı", "CNC işleme ve prova", "Yüzey işlemi, kaplama ve teslimat hazırlığı"],
    relatedProjects: [{ href: "/works/cnc-manufacturing-processes", label: "CNC üretim projeleri" }, { href: "/works/historical-thematic-environments", label: "Mimari ve tematik uygulamalar" }],
    relatedServices: [{ href: "/eps-xps-cnc-isleme", label: "EPS ve XPS CNC işleme" }, { href: "/strafor-heykel-uretimi", label: "Strafor heykel üretimi" }, { href: "/maket-ve-prototip-uretimi", label: "Maket ve prototip üretimi" }],
    faqs: [
      { question: "CNC strafor işleme için hangi dosyalar gerekir?", answer: "Üç boyutlu üretimlerde temiz bir 3D model tercih edilir. Dosya uygunluğu, ölçek ve yüzey beklentisi üretim öncesinde teknik ekip tarafından değerlendirilir." },
      { question: "EPS ve XPS aynı şekilde işlenebilir mi?", answer: "Her iki malzeme de CNC ile işlenebilir; yoğunluk, yüzey yapısı ve kullanım koşulları farklı olduğu için seçim projeye göre yapılır." },
      { question: "Büyük formlar nasıl üretilir?", answer: "Makine ve sevkiyat koşullarına göre form kontrollü parçalara ayrılır, işlenir ve atölyede veya sahada birleştirilir." },
      { question: "İstanbul dışına üretim yapılır mı?", answer: "Evet. Projenin kapsamına göre Türkiye genelinde üretim, sevkiyat ve montaj planlaması yapılabilir." }
    ]
  },
  {
    slug: "strafor-heykel-uretimi",
    title: "Strafor Heykel Üretimi",
    metaTitle: "Strafor Heykel Üretimi İstanbul | Büyük Ölçekli Heykel | Ardıç",
    description: "EPS ve XPS malzemelerle özel strafor heykel, karakter, maskot, dev obje ve tematik figür üretimi; kaplama, boya ve montaj seçenekleri.",
    eyebrow: "Heykel Üretimi",
    summary: "Ardıç, küçük detaylardan büyük ölçekli figürlere kadar projeye özel strafor heykeller üretir. Dijital veya el ile şekillendirilen formlar; kullanım yeri, dayanım ve görsel beklentiye göre kaplanır, boyanır ve montaja hazırlanır.",
    production: ["Karakter, maskot ve figürler", "Dev ürün ve marka objeleri", "Tematik park ve eğlence alanı heykelleri", "Sahne ve etkinlik için hafif dekor heykelleri"],
    methods: ["EPS/XPS blok şekillendirme", "CNC işleme ve el işçiliği", "Parçalı büyük ölçekli üretim", "Projeye uygun sert kaplama ve boya"],
    applications: ["Tema parklar", "AVM ve mağaza vitrinleri", "Festival, fuar ve etkinlikler", "Otel, restoran ve deneyim mekanları"],
    process: ["Referans veya 3D model değerlendirmesi", "Ölçek, malzeme ve taşıyıcı planı", "Şekillendirme ve detaylandırma", "Kaplama, boyama, prova ve sevkiyat"],
    relatedProjects: [{ href: "/works/sculptures-characters", label: "Heykel ve karakter projeleri" }, { href: "/works/commercial-brand-installations", label: "Ticari marka uygulamaları" }],
    relatedServices: [{ href: "/polyester-heykel-uretimi", label: "Polyester heykel üretimi" }, { href: "/cnc-strafor-isleme", label: "CNC strafor işleme" }, { href: "/tema-park-dekor-uretimi", label: "Tema park dekor üretimi" }],
    faqs: [
      { question: "Strafor heykel dış mekanda kullanılabilir mi?", answer: "Uygun taşıyıcı, kaplama, boya ve montaj detayıyla dış mekan kullanımına hazırlanabilir. Çözüm, projenin hava koşulları ve kullanım süresine göre belirlenir." },
      { question: "Strafor heykelin üzeri polyester kaplanabilir mi?", answer: "Evet. Doğru ayırıcı ve kaplama sistemiyle strafor form dayanıklı bir kompozit yüzeye dönüştürülebilir." },
      { question: "Kaç metre büyüklüğünde heykel yapılabilir?", answer: "Boyut; tasarım, taşıyıcı sistem, atölye planı, sevkiyat ve montaj koşullarına göre değerlendirilir. Büyük formlar parçalara ayrılarak üretilebilir." },
      { question: "Teslim süresi neye göre değişir?", answer: "Süre; modelin hazır olup olmamasına, boyuta, detay seviyesine, adet, kaplama ve montaj kapsamına göre belirlenir." }
    ]
  },
  {
    slug: "eps-xps-cnc-isleme",
    title: "EPS ve XPS CNC İşleme",
    metaTitle: "EPS & XPS CNC İşleme | 3D Köpük Kesim | Ardıç",
    description: "EPS ve XPS köpüklerde CNC kesim ve 3D işleme; heykel, kalıp modeli, rölyef, mimari detay ve özel dekor üretimi.",
    eyebrow: "Köpük İşleme",
    summary: "EPS ve XPS, farklı yoğunluk ve yüzey özellikleri sayesinde model, heykel, kalıp ve dekor üretiminde esnek çözümler sunar. Ardıç, malzemeyi kullanım alanına göre seçer; dijital modeli üretilebilir parçalara dönüştürür ve gerekli yüzey işlemlerini uygular.",
    production: ["Kalıp ve model pozitifleri", "Üç boyutlu dekor ve heykel parçaları", "Rölyef ve mimari profiller", "Prototip ve sunum modelleri"],
    methods: ["CNC freze ile üç boyutlu işleme", "Kesim, katmanlama ve blok birleştirme", "El ile detay düzeltme", "Kaplama öncesi yüzey hazırlığı"],
    applications: ["Kompozit kalıp hazırlığı", "Tematik dekorasyon", "Mimari uygulamalar", "Reklam ve deneyim objeleri"],
    process: ["Geometri ve tolerans kontrolü", "EPS veya XPS malzeme seçimi", "CNC işleme ve parça birleştirme", "Yüzey kontrolü ve sonraki üretim aşamasına teslim"],
    relatedProjects: [{ href: "/works/cnc-manufacturing-processes", label: "CNC üretim süreçleri" }, { href: "/works/molds-composite-production", label: "Kalıp ve kompozit projeleri" }],
    relatedServices: [{ href: "/cnc-strafor-isleme", label: "CNC strafor işleme" }, { href: "/rolyef-ve-mimari-dekor", label: "Rölyef ve mimari dekor" }],
    faqs: [
      { question: "EPS ile XPS arasındaki fark nedir?", answer: "EPS daha hafif ve ekonomik seçenekler sunarken XPS genellikle daha homojen ve yoğun bir yapıdadır. Uygun malzeme, detay ve son kullanım koşullarına göre seçilir." },
      { question: "CNC sonrası yüzey doğrudan kullanılabilir mi?", answer: "Bazı geçici uygulamalarda mümkün olsa da kalıcı ve nitelikli işler için zımpara, kaplama veya boya hazırlığı gerekebilir." },
      { question: "Tek parça üretim zorunlu mu?", answer: "Hayır. Büyük geometriler üretim, taşıma ve montaj gereksinimlerine göre parçalara ayrılabilir." }
    ]
  },
  {
    slug: "polyester-heykel-uretimi",
    title: "Polyester Heykel Üretimi",
    metaTitle: "Polyester Heykel Üretimi | Dayanıklı Özel Heykel | Ardıç",
    description: "İç ve dış mekanlar için kalıp, cam elyaf takviyeli polyester heykel, karakter, figür ve özel obje üretimi.",
    eyebrow: "Kompozit Üretim",
    summary: "Polyester heykel üretimi, tekrarlanabilir ve dayanıklı kabuklar elde etmek için model, kalıp ve kompozit uygulama aşamalarını bir araya getirir. Ardıç; tekil sanat objelerinden seri karakter üretimine kadar süreci yüzey bitişi ve montaj detaylarıyla birlikte planlar.",
    production: ["Karakter ve maskot heykelleri", "Ticari sergileme objeleri", "İç ve dış mekan figürleri", "Kalıptan çoğaltılabilir dekor elemanları"],
    methods: ["Ana model ve kalıp hazırlığı", "Cam elyaf takviyeli polyester uygulama", "Birleştirme ve yüzey düzeltme", "Astar, boya ve koruyucu son kat"],
    applications: ["Tema park ve eğlence alanları", "AVM ve marka uygulamaları", "Kamusal ve ticari mekanlar", "Etkinlik ve sergileme projeleri"],
    process: ["Model ve kullanım koşulu analizi", "Kalıp ve parça planlama", "Kompozit üretim ve birleştirme", "Boya, kalite kontrol ve montaj hazırlığı"],
    relatedProjects: [{ href: "/works/molds-composite-production", label: "Kalıp ve kompozit üretim" }, { href: "/works/sculptures-characters", label: "Heykel ve karakterler" }],
    relatedServices: [{ href: "/strafor-heykel-uretimi", label: "Strafor heykel üretimi" }, { href: "/tema-park-dekor-uretimi", label: "Tema park dekor üretimi" }],
    faqs: [
      { question: "Polyester heykel dış mekana uygun mudur?", answer: "Doğru reçine, takviye, boya ve montaj sistemi seçildiğinde dış mekan projelerinde kullanılabilir. Teknik çözüm çevresel koşullara göre belirlenir." },
      { question: "Aynı heykelden birden fazla üretilebilir mi?", answer: "Evet. Uygun bir kalıp sistemi hazırlandığında aynı model kontrollü biçimde çoğaltılabilir." },
      { question: "Polyester heykel ağır mıdır?", answer: "Ürün çoğunlukla kabuk olarak üretildiği için masif malzemelere göre hafif olabilir; ağırlık taşıyıcı ve katman tasarımına bağlıdır." }
    ]
  },
  {
    slug: "tematik-dekorasyon",
    title: "Tematik Dekorasyon ve Mekan Üretimi",
    metaTitle: "Tematik Dekorasyon ve Üretim | İstanbul | Ardıç",
    description: "Otel, restoran, kafe, AVM, etkinlik ve deneyim alanları için konsept geliştirme, tematik dekor üretimi ve uygulama.",
    eyebrow: "Tematik Mekanlar",
    summary: "Ardıç, bir hikayeyi fiziksel mekana dönüştüren tematik dekorasyon projelerini tasarımdan üretime taşır. Heykel, yapay kaya, rölyef, mimari detay, özel mobilya ve dekor elemanları aynı üretim kurgusu içinde geliştirilir.",
    production: ["Tematik cephe ve iç mekan elemanları", "Heykel, karakter ve özel objeler", "Yapay kaya ve organik yüzeyler", "Konsepte özel rölyef, kolon ve dekor"],
    methods: ["Konsept ve uygulama detaylandırması", "CNC, EPS/XPS ve kompozit üretim", "Heykel, kaplama ve boya", "Atölye provası ve saha montaj koordinasyonu"],
    applications: ["Otel, restoran ve kafeler", "AVM ve ticari mekanlar", "Müze, sergi ve deneyim alanları", "Tema park ve eğlence projeleri"],
    process: ["İhtiyaç, ziyaretçi deneyimi ve mekan analizi", "Konseptin üretim detaylarına çevrilmesi", "Disiplinler arası atölye üretimi", "Sevkiyat, saha uygulaması ve teslim"],
    relatedProjects: [{ href: "/works/historical-thematic-environments", label: "Tarihi ve tematik mekanlar" }, { href: "/works/artificial-rock-organic-forms", label: "Yapay kaya ve organik formlar" }],
    relatedServices: [{ href: "/tema-park-dekor-uretimi", label: "Tema park dekor üretimi" }, { href: "/avm-ve-ticari-mekan-dekorasyonu", label: "AVM ve ticari mekan dekorasyonu" }, { href: "/yapay-kaya-uretimi", label: "Yapay kaya üretimi" }],
    faqs: [
      { question: "Tematik dekorasyon projesi nereden başlar?", answer: "Mekanın işlevi, hedef kitlesi, hikayesi, ölçüleri ve uygulama koşulları değerlendirilir; ardından üretilebilir konsept ve kapsam oluşturulur." },
      { question: "Tasarım ve üretim birlikte yapılabilir mi?", answer: "Evet. Ardıç, konseptin üretim detaylarına çevrilmesini ve atölye uygulamasını aynı süreçte koordine edebilir." },
      { question: "Türkiye genelinde montaj yapılıyor mu?", answer: "Proje kapsamı ve saha koşulları uygun olduğunda İstanbul dışına sevkiyat ve montaj planlanabilir." }
    ]
  },
  {
    slug: "tema-park-dekor-uretimi",
    title: "Tema Park Dekor Üretimi",
    metaTitle: "Tema Park Dekor Üreticisi | Heykel ve Tematik Alan | Ardıç",
    description: "Tema parklar ve eğlence alanları için karakter, heykel, yapay kaya, tematik cephe ve deneyim dekoru üretimi.",
    eyebrow: "Deneyim Alanları",
    summary: "Tema park dekoru; güçlü görsel anlatımın yanı sıra ölçek, dayanım, ziyaretçi teması, sevkiyat ve montaj kararlarını birlikte gerektirir. Ardıç, heykel ve dekor elemanlarını üretim ve saha gerçeklerine göre geliştirir.",
    production: ["Karakter ve maskot figürleri", "Tematik giriş, cephe ve yönlendirme elemanları", "Yapay kaya ve fantastik organik yapılar", "Fotoğraf noktaları ve büyük ölçekli objeler"],
    methods: ["CNC ve el ile form üretimi", "EPS/XPS şekillendirme", "Kompozit kaplama ve kalıp", "Dekoratif boya ve eskitme"],
    applications: ["Tema parklar", "Aile eğlence merkezleri", "Hayvan ve safari deneyim alanları", "Turistik destinasyonlar"],
    process: ["Konsept ve saha gereksinimlerinin incelenmesi", "Modüler üretim ve taşıyıcı planı", "Atölye imalatı ve yüzey bitişleri", "Paketleme, sevkiyat ve montaj koordinasyonu"],
    relatedProjects: [{ href: "/works/safari-experiences", label: "Safari deneyimleri" }, { href: "/works/sculptures-characters", label: "Heykeller ve karakterler" }],
    relatedServices: [{ href: "/tematik-dekorasyon", label: "Tematik dekorasyon" }, { href: "/yapay-kaya-uretimi", label: "Yapay kaya üretimi" }, { href: "/polyester-heykel-uretimi", label: "Polyester heykel üretimi" }],
    faqs: [
      { question: "Tema park dekorları hangi malzemelerden üretilir?", answer: "EPS/XPS, kompozit, metal taşıyıcılar, kaplamalar ve farklı boya sistemleri tasarım ve kullanım koşullarına göre birlikte kullanılabilir." },
      { question: "Büyük dekorlar nasıl sevk edilir?", answer: "Büyük işler taşıma ve sahadaki kurulum koşullarına göre modüllere ayrılır; bağlantı ve birleşim detayları üretim aşamasında planlanır." },
      { question: "Mevcut konsepte göre üretim yapılabilir mi?", answer: "Evet. Sağlanan tasarım ve teknik bilgiler üretilebilirlik açısından incelenerek atölye ve montaj planına dönüştürülebilir." }
    ]
  },
  {
    slug: "avm-ve-ticari-mekan-dekorasyonu",
    title: "AVM ve Ticari Mekan Dekorasyonu",
    metaTitle: "AVM ve Ticari Mekan Dekorasyonu | Özel Üretim | Ardıç",
    description: "AVM, mağaza, restoran ve marka alanları için özel dekor, heykel, vitrin objesi, etkinlik kurulumu ve mimari uygulama üretimi.",
    eyebrow: "Ticari Mekanlar",
    summary: "Ardıç, AVM ve ticari mekanlarda marka görünürlüğünü ve ziyaretçi deneyimini destekleyen özel üretim dekorlar geliştirir. Büyük ürün replikaları, heykeller, fotoğraf alanları, vitrin ve mimari dekor elemanları projeye göre üretilir.",
    production: ["Büyük ürün ve marka replikaları", "Vitrin, pop-up ve fotoğraf alanları", "Sezonluk AVM dekorları", "Restoran, kafe ve mağaza için özel elemanlar"],
    methods: ["CNC köpük işleme", "Heykel ve kompozit üretim", "Mimari dekor ve marangozluk koordinasyonu", "Boyama, grafik ve montaj hazırlığı"],
    applications: ["AVM ortak alanları", "Perakende ve vitrin", "Restoran ve kafeler", "Lansman ve marka aktivasyonları"],
    process: ["Marka ve mekan briefinin değerlendirilmesi", "Ölçülendirme ve malzeme seçimi", "Atölye üretimi ve prova", "Planlı sevkiyat ve saha kurulumu"],
    relatedProjects: [{ href: "/works/commercial-brand-installations", label: "Ticari ve marka uygulamaları" }],
    relatedServices: [{ href: "/tematik-dekorasyon", label: "Tematik dekorasyon" }, { href: "/sahne-fuar-ve-etkinlik-dekoru", label: "Sahne, fuar ve etkinlik dekoru" }],
    faqs: [
      { question: "Geçici AVM dekoru üretilebilir mi?", answer: "Evet. Kullanım süresi, tekrar kurulum ihtiyacı ve depolama planına göre sökülebilir veya modüler çözümler geliştirilebilir." },
      { question: "Marka ürününün büyük maketi yapılabilir mi?", answer: "Uygun görsel veya 3D verilerle ürün formu ölçeklendirilerek hafif ve taşınabilir bir sergileme objesine dönüştürülebilir." },
      { question: "Kurulum çalışma saatleri dışında yapılabilir mi?", answer: "Saha kuralları ve proje programı doğrultusunda kurulum planı işveren ve AVM yönetimiyle koordine edilir." }
    ]
  },
  {
    slug: "yapay-kaya-uretimi",
    title: "Yapay Kaya Üretimi ve Uygulaması",
    metaTitle: "Yapay Kaya Üretimi ve Uygulaması | Ardıç İstanbul",
    description: "Tema park, otel, havuz, peyzaj ve tematik mekanlar için doğal görünümlü yapay kaya, organik yüzey ve dekor üretimi.",
    eyebrow: "Organik Formlar",
    summary: "Yapay kaya üretimi; doğal referansların ölçek, doku, renk ve mekan ilişkisi içinde yeniden yorumlanmasıdır. Ardıç, iç ve dış mekan projeleri için heykelsi kaya formları ve organik dekor yüzeyleri üretir.",
    production: ["Bağımsız yapay kaya objeleri", "Duvar ve cephe kaya yüzeyleri", "Fantastik organik yapılar", "Peyzaj ve deneyim alanı elemanları"],
    methods: ["Referans ve form modelleme", "Köpük veya taşıyıcı üzerinde şekillendirme", "Doku ve dayanım kaplamaları", "Katmanlı dekoratif boya"],
    applications: ["Tema parklar", "Otel, spa ve havuz çevreleri", "Restoran ve tematik iç mekanlar", "Peyzaj ve turistik tesisler"],
    process: ["Doğal referans ve saha analizleri", "Form, modül ve taşıyıcı tasarımı", "Doku üretimi ve renklendirme", "Saha birleşimleri ve son rötuşlar"],
    relatedProjects: [{ href: "/works/artificial-rock-organic-forms", label: "Yapay kaya ve organik form projeleri" }],
    relatedServices: [{ href: "/tematik-dekorasyon", label: "Tematik dekorasyon" }, { href: "/tema-park-dekor-uretimi", label: "Tema park dekor üretimi" }],
    faqs: [
      { question: "Yapay kaya dış mekanda kullanılabilir mi?", answer: "Evet. Taşıyıcı, kaplama, drenaj ve boya sistemi projenin iklim ve kullanım koşullarına göre tasarlandığında dış mekanda uygulanabilir." },
      { question: "Yapay kaya doğal kayaya benzer mi?", answer: "Form, doku ve renk katmanları doğal referanslara göre çalışıldığında gerçekçi bir görünüm elde edilebilir; tasarım fantastik bir dile de uyarlanabilir." },
      { question: "Mevcut duvar üzerine uygulanabilir mi?", answer: "Yüzeyin taşıma kapasitesi ve saha koşulları incelendikten sonra uygun alt konstrüksiyon ve kaplama çözümü belirlenebilir." }
    ]
  },
  {
    slug: "rolyef-ve-mimari-dekor",
    title: "Rölyef ve Mimari Dekor Üretimi",
    metaTitle: "Rölyef ve Mimari Dekor Üretimi | CNC Uygulama | Ardıç",
    description: "İç ve dış mekanlar için CNC işlenmiş rölyef, kolon, kemer, söve, cephe ve projeye özel mimari dekor üretimi.",
    eyebrow: "Mimari Dekorasyon",
    summary: "Ardıç; mimari projeler için rölyef, kolon, kemer, söve, silme, heykelsi yüzey ve özel dekor elemanları üretir. Tarihi referanslar veya çağdaş tasarımlar dijital üretim ile el işçiliğinin birlikte kullanıldığı bir sürece dönüştürülür.",
    production: ["Duvar rölyefleri ve panolar", "Kolon, başlık ve kaideler", "Kemer, söve ve cephe detayları", "Özel desenli mimari yüzeyler"],
    methods: ["3D model ve CNC işleme", "EPS/XPS ana form", "Kalıp ve kompozit çoğaltma", "El işçiliği, kaplama ve boya"],
    applications: ["Otel ve konut projeleri", "Restoran ve ticari iç mekanlar", "Tarihi ve tematik mekanlar", "Cephe ve giriş uygulamaları"],
    process: ["Çizim ve referansların incelenmesi", "Ölçekli numune veya dijital model", "Ana model, kalıp veya doğrudan üretim", "Yüzey bitişi ve montaj hazırlığı"],
    relatedProjects: [{ href: "/works/historical-thematic-environments", label: "Tarihi ve tematik mimari projeler" }, { href: "/works/cnc-manufacturing-processes", label: "CNC üretim süreçleri" }],
    relatedServices: [{ href: "/cnc-strafor-isleme", label: "CNC strafor işleme" }, { href: "/tematik-dekorasyon", label: "Tematik dekorasyon" }],
    faqs: [
      { question: "Rölyef hangi ölçekte üretilebilir?", answer: "Ölçek; tasarım detayı, malzeme, üretim tekniği, sevkiyat ve montaj koşullarına göre belirlenir. Büyük yüzeyler modüler hazırlanabilir." },
      { question: "Tekrarlanan mimari elemanlar çoğaltılabilir mi?", answer: "Evet. Adet ve geometri uygun olduğunda ana modelden kalıp alınarak tutarlı parçalar üretilebilir." },
      { question: "Mevcut çizimden üretim yapılır mı?", answer: "Teknik çizim veya 3D model üretilebilirlik açısından değerlendirilir; eksik detaylar proje ekibiyle netleştirilir." }
    ]
  },
  {
    slug: "buyuk-olcekli-3d-baski",
    title: "Büyük Ölçekli 3D Baskı İstanbul",
    metaTitle: "Büyük Format 3D Baskı İstanbul | Özel Üretim | Ardıç",
    description: "İstanbul'da prototip, kalıp modeli, heykel parçası, mimari bileşen ve özel obje için büyük format 3D baskı hizmeti.",
    eyebrow: "Katmanlı Üretim",
    summary: "Ardıç'ın büyük format 3D baskı altyapısı; prototip, kalıp modeli, heykel parçası ve özel objelerin dijital veriden fiziksel forma dönüştürülmesini sağlar. Projede doğrulanan 80×80×80 cm, 40×40×40 cm ve 100×100×100 cm üretim hacimleri, daha büyük işlerde parçalı üretim yaklaşımıyla kullanılabilir.",
    production: ["Prototip ve tasarım doğrulama parçaları", "Kalıp için ana modeller", "Heykel ve karakter bileşenleri", "Özel sergileme ve mimari objeler"],
    methods: ["3D model kontrolü", "Baskı yönü ve parça planlama", "Katmanlı üretim", "Birleştirme ve yüzey sonlandırma"],
    applications: ["Ürün geliştirme", "Heykel ve sanat üretimi", "Mimari model ve detay", "Kalıp ve kompozit süreçleri"],
    process: ["Dosyanın baskıya uygunluk kontrolü", "Ölçek, parça ve malzeme planı", "Baskı ve ara kalite kontrolleri", "Birleştirme, yüzey işlemi ve teslim"],
    relatedProjects: [{ href: "/works/molds-composite-production", label: "Kalıp ve kompozit üretimi" }, { href: "/works/sculptures-characters", label: "Heykel ve karakterler" }],
    relatedServices: [{ href: "/maket-ve-prototip-uretimi", label: "Maket ve prototip üretimi" }, { href: "/polyester-heykel-uretimi", label: "Polyester heykel üretimi" }],
    faqs: [
      { question: "Büyük parçalar tek seferde mi basılır?", answer: "Geometri üretim hacmini aşıyorsa kontrollü parçalara ayrılır; baskı sonrası birleştirme ve yüzey işlemi uygulanır." },
      { question: "Baskı dosyası nasıl hazırlanmalıdır?", answer: "Kapalı, temiz ve gerçek ölçekte bir 3D model tercih edilir. Duvar kalınlıkları ve detaylar üretim öncesinde kontrol edilir." },
      { question: "Baskı sonrası yüzey düzeltilebilir mi?", answer: "Evet. Kullanım amacına göre birleştirme, zımpara, dolgu, astar ve boya süreçleri uygulanabilir." }
    ]
  },
  {
    slug: "maket-ve-prototip-uretimi",
    title: "Maket ve Prototip Üretimi",
    metaTitle: "Özel Maket ve Prototip Üretimi | İstanbul | Ardıç",
    description: "Ürün, mimari eleman, sergileme objesi ve büyük ölçekli form için CNC, 3D baskı ve el işçiliğiyle özel maket ve prototip üretimi.",
    eyebrow: "Model ve Prototip",
    summary: "Maket ve prototipler, bir tasarımın oranını, yüzeyini, üretilebilirliğini veya sunum etkisini fiziksel olarak değerlendirmeyi sağlar. Ardıç, küçük doğrulama modellerinden dev ürün maketlerine kadar yöntemi projenin amacına göre belirler.",
    production: ["Ürün ve form prototipleri", "Mimari detay ve dekor numuneleri", "Dev ürün ve sergileme maketleri", "Kalıp öncesi ana modeller"],
    methods: ["CNC EPS/XPS işleme", "Büyük format 3D baskı", "Kalıp ve kompozit", "El işçiliği, boya ve grafik uygulama"],
    applications: ["Tasarım ve üretim doğrulama", "Fuar ve lansman sunumları", "AVM ve vitrin sergilemeleri", "Heykel ve kalıp geliştirme"],
    process: ["Prototip amacının ve ölçeğin belirlenmesi", "Uygun dijital veya fiziksel üretim yöntemi", "Numune, prova ve revizyon", "Son yüzey ve sunum hazırlığı"],
    relatedProjects: [{ href: "/works/cnc-manufacturing-processes", label: "CNC üretim süreçleri" }, { href: "/works/commercial-brand-installations", label: "Ticari sergileme objeleri" }],
    relatedServices: [{ href: "/buyuk-olcekli-3d-baski", label: "Büyük ölçekli 3D baskı" }, { href: "/cnc-strafor-isleme", label: "CNC strafor işleme" }],
    faqs: [
      { question: "Maket için 3D model gerekli midir?", answer: "Her projede zorunlu değildir. Teknik çizim, referans görsel veya fiziksel numune değerlendirilebilir; karmaşık geometrilerde 3D model süreci hızlandırır." },
      { question: "Dev ürün maketi üretilebilir mi?", answer: "Evet. Ölçek, taşıma ve kurulum koşullarına göre hafif çekirdek, taşıyıcı ve kaplama sistemi planlanabilir." },
      { question: "Tek adet prototip yapılabilir mi?", answer: "Evet. Üretim yöntemi tek adet veya çoğaltma ihtiyacına göre seçilir." }
    ]
  },
  {
    slug: "sahne-fuar-ve-etkinlik-dekoru",
    title: "Sahne, Fuar ve Etkinlik Dekoru",
    metaTitle: "Sahne, Fuar ve Etkinlik Dekoru Üretimi | Ardıç",
    description: "Sahne, fuar standı, lansman ve etkinlikler için heykel, büyük obje, tematik fon, marka dekoru ve modüler özel üretim.",
    eyebrow: "Geçici Mekanlar",
    summary: "Etkinlik dekorları kısa kurulum süreleri, güvenli taşıma ve güçlü görsel etki gerektirir. Ardıç; sahne, fuar, lansman ve marka etkinlikleri için hafif, modüler ve projeye özel dekor elemanları üretir.",
    production: ["Sahne fonu ve tematik panolar", "Büyük marka ve ürün objeleri", "Fotoğraf alanları ve heykeller", "Fuar ve lansman için özel dekor"],
    methods: ["CNC köpük ve panel işleme", "Heykel ve kompozit üretim", "Modüler taşıyıcı ve birleşimler", "Boya, kaplama ve grafik entegrasyonu"],
    applications: ["Konser ve gösteriler", "Fuar ve kongreler", "Ürün lansmanları", "Kurumsal ve kamusal etkinlikler"],
    process: ["Kreatif tasarım ve teknik brief", "Kurulum süresi ile nakliye planı", "Modüler atölye üretimi ve prova", "Paketleme, kurulum ve söküm koordinasyonu"],
    relatedProjects: [{ href: "/works/commercial-brand-installations", label: "Ticari ve marka uygulamaları" }, { href: "/works/sculptures-characters", label: "Heykeller ve karakterler" }],
    relatedServices: [{ href: "/avm-ve-ticari-mekan-dekorasyonu", label: "AVM ve ticari mekan dekorasyonu" }, { href: "/maket-ve-prototip-uretimi", label: "Maket ve prototip üretimi" }],
    faqs: [
      { question: "Dekorlar tekrar kullanılabilir mi?", answer: "Tasarım aşamasında tekrar kullanım hedeflenirse sökülebilir bağlantılar, dayanıklı yüzeyler ve uygun paketleme çözümleri planlanabilir." },
      { question: "Kısa kurulum süresine uygun üretim yapılır mı?", answer: "Saha süresini azaltmak için elemanlar atölyede mümkün olduğunca tamamlanır ve prova edilir; gerçek program kapsam netleştikten sonra belirlenir." },
      { question: "İstanbul dışındaki etkinliklere hizmet veriliyor mu?", answer: "Projenin takvimi, sevkiyat ve montaj kapsamı uygun olduğunda Türkiye genelinde planlama yapılabilir." }
    ]
  }
];

export const getServicePage = (slug: string) => servicePages.find((page) => page.slug === slug);
