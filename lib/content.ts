export const brand = {
  name: "ARDIÇ DESIGN & FABRICATION",
  shortName: "ARDIÇ",
  tagline: "Hatırlanmak İçin Tasarlandı.",
  phone: "+90 543 626 89 69",
  location: "Karadeniz Caddesi No:131, Ferhatpaşa, Ataşehir, İstanbul, Türkiye"
};

export const navigation = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/works", label: "Projeler" },
  { href: "/concepts", label: "Konseptler" },
  { href: "/services", label: "Hizmetler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/fabrication", label: "Üretim" },
  { href: "/live", label: "Canlı", mobileLabel: "Canlı Atölye", footerLabel: "Canlı Atölye" },
  { href: "/contact", label: "İletişim" }
];

type ConceptCollection = {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageCaption: string;
  galleryImages?: {
    src: string;
    alt: string;
    caption: string;
    position?: string;
  }[];
  adaptableElements: string[];
};

export const conceptCollections: ConceptCollection[] = [
  {
    number: "SC-001",
    title: "Zeytin Lounge Konsepti",
    description:
      "Zeytin yeşili oturma elemanları, ceviz tonları, bronz detaylar, dokulu taş yüzeyler, füme cam ve ambiyans aydınlatmasıyla şekillenen sıcak ve rafine bir lounge konsepti. Özel salonlara, butik ticari iç mekanlara, otel bekleme alanlarına, resepsiyonlara ve tematik konaklama mekanlarına uyarlanabilir.",
    image: "/projects/concepts/olive-lounge-concept-interior-01.png",
    imageAlt:
      "Zeytin yeşili oturma elemanları ve sıcak ahşap atmosferiyle Zeytin Lounge Konsepti",
    imageCaption:
      "Zeytin yeşili oturma grubu, ceviz yüzeyler, bronz detaylar, füme cam ve sıcak dolaylı aydınlatma.",
    galleryImages: [
      {
        src: "/projects/concepts/olive-lounge-concept-detail-chair-01.png",
        alt: "Olive Lounge Concept close-up of olive green sculptural lounge seating with walnut background",
        caption: "Zeytin yeşili oturma elemanı detayı",
        position: "50% 48%"
      },
      {
        src: "/projects/concepts/olive-lounge-concept-detail-table-01.png",
        alt: "Olive Lounge Concept smoked glass table with bronze frame, walnut flooring, and warm accessories",
        caption: "Füme cam ve bronz lounge masası",
        position: "50% 52%"
      },
      {
        src: "/projects/concepts/olive-lounge-concept-sculptural-mirror-01.png",
        alt: "Olive Lounge Concept sculptural wall mirror with warm backlighting, walnut panels, and stone console",
        caption: "Heykelsi ayna ve dokulu duvar detayı",
        position: "50% 50%"
      },
      {
        src: "/projects/concepts/olive-lounge-concept-material-palette-01.png",
        alt: "Olive Lounge Concept material palette with olive fabric, walnut wood, bronze metal, stone and smoked glass",
        caption: "Zeytin kumaş, ceviz, bronz, taş ve cam malzeme paleti",
        position: "50% 50%"
      }
    ],
    adaptableElements: [
      "Zeytin yeşili oturma grubu",
      "Heykelsi duvar aynası",
      "Ceviz ahşap yüzeyler",
      "Bronz metal detaylar",
      "Füme / şeffaf cam",
      "Sıcak dolaylı aydınlatma",
      "Dokulu taş veya sıva duvar elemanları"
    ]
  },
  {
    number: "SC-002",
    title: "Fütüristik Pod Konsepti",
    description:
      "Heykelsi pod formu, parlak metalik kabuk, sıcak ceviz iç yüzeyler, koyu taş zemin, füme cam ve atmosferik aydınlatma etrafında gelişen fütüristik bir ticari iç mekan konsepti. Resepsiyonlara, deneyim odalarına, lüks mağazalara, tematik salonlara, sergi alanlarına ve marka mekanlarına uyarlanabilir.",
    image: "/projects/concepts/futuristic-pod-concept-interior-01.png",
    imageAlt:
      "Heykelsi metalik pod ve sıcak ambiyans aydınlatmalı Fütüristik Pod Konsepti",
    imageCaption:
      "Resepsiyon, perakende, sergi ve marka mekanları için heykelsi metalik pod tasarım dili.",
    galleryImages: [
      {
        src: "/projects/concepts/futuristic-pod-concept-material-palette-01.png",
        alt: "Futuristic Pod Concept material palette with metallic shell, walnut wood, stone and glass finishes",
        caption: "Metalik kabuk, ceviz, taş, bronz ve cam malzeme paleti",
        position: "50% 50%"
      },
      {
        src: "/projects/concepts/futuristic-pod-concept-detail-shell-01.png",
        alt: "Futuristic Pod Concept close-up of glossy metallic pod shell and warm walnut interior lighting",
        caption: "Parlak kabuk ve ceviz iç yüzey detayı",
        position: "50% 50%"
      },
      {
        src: "/projects/concepts/futuristic-pod-concept-detail-counter-01.png",
        alt: "Futuristic Pod Concept reception counter with curved metallic shell and warm hidden lighting",
        caption: "Kavisli resepsiyon bankosu ve gizli aydınlatma",
        position: "50% 50%"
      },
      {
        src: "/projects/concepts/futuristic-pod-concept-interior-02.png",
        alt: "Futuristic Pod Concept interior with sculptural metallic pod and ambient lighting in a premium lobby",
        caption: "Premium lobi ortamında bütüncül pod konsepti",
        position: "50% 50%"
      },
      {
        src: "/projects/concepts/futuristic-pod-concept-presentation-01.png",
        alt: "Futuristic Pod Concept presentation visual with metallic pod, dark stone flooring and brand atmosphere",
        caption: "Ticari ve tematik iç mekanlar için sunum görünümü",
        position: "50% 50%"
      }
    ],
    adaptableElements: [
      "Heykelsi pod strüktürü",
      "Parlak metalik gri kabuk",
      "Ceviz ahşap iç yüzeyler",
      "Koyu taş zemin",
      "Bronz metal detaylar",
      "Füme / şeffaf cam",
      "Gizli ambiyans aydınlatması",
      "Özel resepsiyon veya sergileme bankosu"
    ]
  },
  {
    number: "SC-003",
    title: "Özel Tematik İç Mekan Elemanları",
    description:
      "Heykelsi koltuklar, karakteristik aynalar, dekoratif duvar objeleri, sergileme üniteleri, sanat eserleri ve mimari detaylar gibi özel üretim tematik parçalar için esnek bir konsept ailesi. Her eleman mekanın ölçüsüne, markaya ve hedeflenen atmosfere göre yeniden tasarlanabilir.",
    imageCaption:
      "Heykelsi mobilyalar, aynalar, sergileme objeleri, rölyefler ve markaya özel iç mekan parçaları için esnek konsept ailesi.",
    adaptableElements: [
      "Özel koltuk ve oturma formları",
      "Heykelsi aynalar",
      "Duvar sanatı ve rölyef yüzeyler",
      "Tematik sergileme objeleri",
      "Dekoratif mobilya parçaları",
      "Markaya özel iç mekan elemanları",
      "Aydınlatma entegre heykelsi detaylar"
    ]
  }
];

export const conceptProcess = [
  {
    number: "01",
    title: "Konsept Yönünü Belirleyin",
    copy: "Hedeflediğiniz atmosfere uygun özgün bir konsept veya görsel yön seçin."
  },
  {
    number: "02",
    title: "Mekanınıza Uyarlayalım",
    copy: "Ölçüleri, malzemeleri, aydınlatmayı, mobilyaları ve heykelsi detayları mekanınıza göre geliştiriyoruz."
  },
  {
    number: "03",
    title: "Tasarım Geliştirme",
    copy: "Uyarlanmış tasarım dilini, malzeme kararlarını ve üretim kurgusunu hazırlıyoruz."
  },
  {
    number: "04",
    title: "Kendi Atölyemizde Üretim",
    copy: "Onaylanan elemanları CNC, EPS/XPS şekillendirme, heykel uygulaması, 3D baskı, kalıp, kaplama ve montaj süreçleriyle üretiyoruz."
  },
  {
    number: "05",
    title: "Teslimat ve Montaj Desteği",
    copy: "Tamamlanan konsept elemanlarını proje kapsamına göre sahada uygulama, montaj veya teslimat için hazırlıyoruz."
  }
];

export const services = [
  {
    title: "Marka Uygulamaları",
    description:
      "Perakende, konaklama ve etkinlik projeleri için konseptten üretime, yüzey bitişinden montaj ve saha teslimine kadar geliştirilen marka uygulamaları."
  },
  {
    title: "Mimari Dekorasyon",
    description:
      "Projeye özel iç ve dış mekan elemanları, CNC işlenmiş detaylar, kolonlar, rölyefler, yüzeyler ve mimari dekor uygulamaları."
  },
  {
    title: "Heykel ve Sanat Uygulamaları",
    description:
      "Heykel, kaplama, boyama ve yüzey bitirme süreçleriyle üretilen karakterler, sanatsal objeler ve büyük ölçekli dikkat çekici eserler."
  },
  {
    title: "Tematik Mekanlar",
    description:
      "Ticari, kültürel ve eğlence alanları için dekor üretimi ve montaj koordinasyonuyla hayata geçirilen, hikaye odaklı tematik mekanlar."
  },
  {
    title: "Endüstriyel 3D Baskı",
    description:
      "Prototip, kalıp, heykelsi form, mimari bileşen ve özel sergileme objeleri için 80×80×80 cm, 40×40×40 cm ve 100×100×100 cm üretim kapasiteli büyük format 3D baskı."
  }
];

export const heroSlides = [
  {
    image: "/home/hero-roman-heritage.jpeg",
    alt: "Roma kolonları, antik taş tabletler ve sıcak tarihi aydınlatma",
    label: "Tarihi Mekanlar"
  },
  {
    image: "/home/brand-story-lobby.jpeg",
    alt: "Doğal kaya formları ve Ardıç marka duvarıyla koyu premium lobi",
    label: "Hatırlanmak İçin Tasarlandı"
  },
  {
    image: "/home/production-columns.png",
    alt: "Beyaz Korint kolon üretimi ve heykel detayları",
    label: "Üretim Atölyesi"
  },
  {
    image: "/home/featured-entrance-gate.png",
    alt: "Anıtsal giriş kapısı mimari üretim projesi",
    label: "Mimari Mekanlar"
  },
  {
    image: "/home/featured-vintage-vehicle.png",
    alt: "Siyah klasik araç özel deneyim objesi",
    label: "Fantastik ve Deneyim Mekanları"
  },
  {
    image: "/home/featured-burger-sculpture.png",
    alt: "Ticari marka deneyimi için dev burger heykeli",
    label: "Ticari Heykeller"
  }
];

export const works = [
  {
    title: "Anıtsal Mimari Üretim",
    type: "Mimari Mekanlar",
    number: "Proje 01",
    image: "/home/featured-entrance-gate.png"
  },
  {
    title: "Özel Deneyim Objeleri",
    type: "Fantastik ve Deneyim Mekanları",
    number: "Proje 02",
    image: "/home/featured-vintage-vehicle.png"
  },
  {
    title: "Ticari Heykeller ve Marka Deneyimleri",
    type: "Ticari ve Tematik İç Mekanlar",
    number: "Proje 03",
    image: "/home/featured-burger-sculpture.png"
  }
];

export type PortfolioImage =
  | string
  | {
      src: string;
      alt: string;
      title?: string;
      description?: string;
    };

export const getPortfolioImageSrc = (image: PortfolioImage) =>
  typeof image === "string" ? image : image.src;

export const getPortfolioImageAlt = (image: PortfolioImage, fallback: string) =>
  typeof image === "string" ? fallback : image.alt;

const portfolioImage = (path: string) => path;

const portfolioImageSet = (slug: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) => `/projects/portfolio/${slug}/${slug}-${`${index + 1}`.padStart(2, "0")}.jpeg`
  );

const portfolioImageSequence = (slug: string, indexes: number[]) =>
  indexes.map((index) => `/projects/portfolio/${slug}/${slug}-${`${index}`.padStart(2, "0")}.jpeg`);

type PortfolioCategoryInput = {
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  href: string;
  introHeading: string;
  intro: string[];
  images: PortfolioImage[];
  coverImage?: string;
  coverImages?: PortfolioImage[];
  coverPosition?: string;
  alt?: string;
  featured?: boolean;
  published?: boolean;
};

const portfolioCategoryData: PortfolioCategoryInput[] = [
  {
    title: "Safari Deneyimleri",
    slug: "safari-experiences",
    description:
      "Destinasyon mekanları için hayvan figürleri, dekor elemanları ve etkileyici ziyaretçi deneyimleri.",
    shortDescription:
      "Destinasyon mekanları için hayvan figürleri, dekor elemanları ve etkileyici ziyaretçi deneyimleri.",
    href: "/works/safari-experiences",
    introHeading: "Ziyaretçi etkileşimi için tasarlanan, doğadan ilham alan sürükleyici mekanlar.",
    intro: [
      "Safari Deneyimleri; atmosfer, hareket ve kalıcı iz yaratmak üzere tasarlanan hayvan figürlerini, dekor elemanlarını ve ziyaretçi odaklı uygulamaları bir araya getirir.",
      "Galeride heykel ve üretim süreçleriyle hazırlanan hayvan figürleri, peyzaj detayları ve tematik destinasyon elemanları yer alır."
    ],
    images: portfolioImageSet("safari-experiences", 9),
    coverImages: [
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-03.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-04.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-07.jpeg"),
      portfolioImage("/projects/portfolio/safari-experiences/safari-experiences-09.jpeg")
    ],
    coverPosition: "50% 45%",
    alt: "Safari experience portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Heykeller ve Karakterler",
    slug: "sculptures-characters",
    description:
      "Akılda kalıcı mekanlar için üretilen özel karakter figürleri, heykelsi objeler, aksesuarlar ve tematik formlar.",
    shortDescription:
      "Akılda kalıcı mekanlar için üretilen özel karakter figürleri, heykelsi objeler, aksesuarlar ve tematik formlar.",
    coverImage: "/services/sculpture-elephant-front.jpeg",
    coverPosition: "50% 35%",
    alt: "Large-scale sculptural character and artwork cover image",
    href: "/works/sculptures-characters",
    introHeading: "Güçlü görsel kimliğe sahip karakterler ve heykelsi objeler.",
    intro: [
      "Heykeller ve Karakterler; tematik mekanlar, perakende alanları ve eğlence projeleri için üretilen bağımsız figürleri, maskotları, dekoratif objeleri ve özel aksesuarları kapsar.",
      "Her parça; şekillendirme ve üretimden yüzey detaylarına ve son kat uygulamalarına uzanan fiziksel bir hikaye anlatım öğesi olarak ele alınır."
    ],
    images: [
      ...portfolioImageSequence("sculptures-characters", [1, 2, 3, 4, 9, 10, 11, 12, 13]),
      {
        src: "/projects/portfolio/sculptures-characters/historical-thematic-environments-28.jpeg",
        alt: "Abstract faceted sculptural form displayed in a workshop interior",
        title: "Abstract Faceted Sculptural Form",
        description:
          "A standalone geometric sculptural form produced as a decorative physical object."
      }
    ],
    coverImages: [
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-01.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-02.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-04.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/sculptures-characters-09.jpeg"),
      portfolioImage("/projects/portfolio/sculptures-characters/historical-thematic-environments-28.jpeg")
    ],
    featured: true,
    published: true
  },
  {
    title: "Yapay Kaya ve Organik Formlar",
    slug: "artificial-rock-organic-forms",
    description:
      "Yapay kaya uygulamaları, organik dekor formları, fantastik yapılar ve doğadan ilham alan özel üretim elemanlar.",
    shortDescription:
      "Yapay kaya uygulamaları, organik dekor formları, fantastik yapılar ve doğadan ilham alan özel üretim elemanlar.",
    href: "/works/artificial-rock-organic-forms",
    introHeading: "Doku, ölçek ve atmosfer odağında üretilen organik dekor formları.",
    intro: [
      "Yapay Kaya ve Organik Formlar; tematik mekanlar için şekillendirilen kaya yüzeylerini, fantastik mantar evleri, oyma rölyefleri ve organik yapıları kapsar.",
      "Dayanıklı doğal ve fantastik formlar oluşturmak için heykel modelleme, kaplama, doku ve üretim teknikleri birlikte kullanılır."
    ],
    images: [
      ...portfolioImageSequence("artificial-rock-organic-forms", [1, 2, 3, 4, 5, 6, 7, 9, 10]),
      {
        src: "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png",
        alt: "Organic stone wall feature with warm backlighting in a premium lounge interior",
        title: "Organic Stone Lounge Feature",
        description:
          "A refined interior feature using an irregular stone-like form as a sculptural focal point."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png",
        alt: "Organic stone wall feature with warm backlighting in a premium lounge interior"
      },
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-04.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-05.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-06.jpeg"),
      portfolioImage("/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-02.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "Artificial rock and organic forms portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Tarihi ve Tematik Mekanlar",
    slug: "historical-thematic-environments",
    description:
      "Kültürel mirastan ilham alan kolonlar, yazıtlar, kemerler, cephe elemanları ve tematik mimari mekanlar.",
    shortDescription:
      "Kültürel mirastan ilham alan kolonlar, yazıtlar, kemerler, cephe elemanları ve tematik mimari mekanlar.",
    coverImage: "/services/architectural-decor-relief.jpeg",
    coverPosition: "50% 45%",
    alt: "Decorative architectural and thematic environment cover image",
    href: "/works/historical-thematic-environments",
    introHeading: "Kültürel ve tematik anlatıların mimari detaylara dönüştüğü mekanlar.",
    intro: [
      "Tarihi ve Tematik Mekanlar; Roma kolonlarını, oyma yazıtları, çinili kemerleri, cephe parçalarını ve kültürel mirastan ilham alan mekansal elemanları bir araya getirir.",
      "Bu çalışmalar kültür ve destinasyon projeleri için referans odaklı tasarım, CNC üretim, el işçiliği ve dekor uygulamasını buluşturur."
    ],
    images: [
      ...portfolioImageSequence("historical-thematic-environments", [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 27
      ]),
      {
        src: "/projects/portfolio/historical-thematic-environments/artificial-rock-organic-forms-08.jpeg",
        alt: "Green twisted decorative column form for a thematic architectural environment",
        title: "Green Decorative Column Form",
        description:
          "A twisted green column-like form suited to decorative architectural and thematic settings."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/white-ornamental-architectural-arch-production-01.png",
        alt: "White ornamental architectural arch element produced for a thematic interior",
        title: "Ornamental Architectural Arch",
        description:
          "A large-scale decorative arch form prepared as a sculptural architectural element."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/eagle-relief-wall-with-decorative-columns-01.png",
        alt: "Eagle relief wall with decorative columns for a classical thematic interior",
        title: "Eagle Relief Wall",
        description:
          "A classical relief composition with sculpted columns, mountain scenery, and an eagle motif."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/ornamental-white-column-shaft-relief-01.png",
        alt: "Ornamental white column shaft with carved relief details for a thematic interior",
        title: "Ornamental Column Shaft",
        description:
          "A tall decorative column component with carved relief bands and a twisted central shaft."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/green-marble-twisted-column-form-01.png",
        alt: "Green marble-effect twisted column form produced as a decorative architectural element",
        title: "Green Twisted Column Form",
        description:
          "A sculptural twisted column form finished with a polished green stone-effect surface."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/decorative-white-column-capital-01.png",
        alt: "Decorative white column capital with classical leaf ornamentation",
        title: "Decorative Column Capital",
        description:
          "A classical column capital form with raised ornamental leaf detailing for architectural decor."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-tiered-fountain-01.png",
        alt: "Classical white tiered fountain form produced as a decorative architectural object",
        title: "Classical Tiered Fountain",
        description:
          "A white three-tier fountain form produced for decorative architectural and thematic settings."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-tiered-fountain-02.png",
        alt: "Tall white classical tiered fountain with shell-like bowl details",
        title: "Tall Classical Fountain",
        description:
          "A taller fountain variation with stacked shell-like bowls and classical decorative proportions."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/spiral-white-decorative-vase-01.png",
        alt: "White spiral decorative vase form produced for architectural display",
        title: "Spiral Decorative Vase",
        description:
          "A large white vase form with subtle spiral fluting for refined decorative environments."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/fluted-white-sculptural-vase-01.png",
        alt: "Tall white fluted sculptural vase with vertical ribbed geometry",
        title: "Fluted Sculptural Vase",
        description:
          "A tall sculptural vase form with vertical fluting and a narrow waist profile."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-decorative-urn-01.png",
        alt: "Classical white decorative urn form with rounded body and flared neck",
        title: "Classical Decorative Urn",
        description:
          "A classical urn-like display form with a rounded body and flared upper neck."
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/classical-white-baluster-vase-01.png",
        alt: "White baluster vase form with classical rounded profile",
        title: "Classical Baluster Vase",
        description:
          "A white baluster-style decorative vase form with a textured sculptural surface."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/historical-thematic-environments/eagle-relief-wall-with-decorative-columns-01.png",
        alt: "Eagle relief wall with decorative columns for a classical thematic interior"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/ornamental-white-column-shaft-relief-01.png",
        alt: "Ornamental white column shaft with carved relief details for a thematic interior"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/decorative-white-column-capital-01.png",
        alt: "Decorative white column capital with classical leaf ornamentation"
      },
      {
        src: "/projects/portfolio/historical-thematic-environments/green-marble-twisted-column-form-01.png",
        alt: "Green marble-effect twisted column form produced as a decorative architectural element"
      },
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg"),
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-08.jpeg"),
      portfolioImage("/projects/portfolio/historical-thematic-environments/historical-thematic-environments-10.jpeg")
    ],
    featured: true,
    published: true
  },
  {
    title: "CNC Üretim Süreçleri",
    slug: "cnc-manufacturing-processes",
    description:
      "CNC kesimli formlar, köpük modeller, rölyef parçaları ve atölye üretim süreçleri.",
    shortDescription:
      "CNC kesimli formlar, köpük modeller, rölyef parçaları ve atölye üretim süreçleri.",
    href: "/works/cnc-manufacturing-processes",
    introHeading: "Karmaşık fiziksel formlar için dijital üretim süreçleri.",
    intro: [
      "CNC Üretim Süreçleri, büyük dekor formlarının ve özel parçaların atölyedeki imalat aşamalarını belgeler.",
      "Galeri; son yüzey ve montaj öncesindeki CNC işleme, köpük şekillendirme, parça hazırlığı ve üretim kurgusunu gösterir."
    ],
    images: portfolioImageSet("cnc-manufacturing-processes", 12),
    coverImages: [
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-02.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-04.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-07.jpeg"),
      portfolioImage("/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-09.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "CNC manufacturing process portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Kalıp ve Kompozit Üretimi",
    slug: "molds-composite-production",
    description:
      "Heykel üretimi için kalıp, kaplama, kompozit şekillendirme ve tekrarlanabilir üretim sistemleri.",
    shortDescription:
      "Özel formlar için kalıp sistemleri, kompozit üretim, polyester döküm ve tekrarlanabilir imalat süreçleri.",
    href: "/works/molds-composite-production",
    introHeading: "Özel heykel ve dekor elemanları için tekrarlanabilir üretim sistemleri.",
    intro: [
      "Kalıp ve Kompozit Üretimi, ana modellerin tekrarlanabilir ve dayanıklı parçalara dönüştürülmesindeki uygulama aşamalarını gösterir.",
      "Görseller kompozite hazır formları, kaplanmış yüzeyleri, kalıp parçalarını ve büyük uygulamaları destekleyen üretim detaylarını belgeler."
    ],
    images: portfolioImageSequence("molds-composite-production", [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    coverImages: [
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-01.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-04.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-05.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-07.jpeg"),
      portfolioImage("/projects/portfolio/molds-composite-production/molds-composite-production-09.jpeg")
    ],
    coverPosition: "50% 50%",
    alt: "Molds and composite production portfolio category cover image",
    featured: true,
    published: true
  },
  {
    title: "Ticari ve Marka Uygulamaları",
    slug: "commercial-brand-installations",
    description:
      "Perakende sergilemeleri, marka mekanları, ürün replikaları, vitrinler ve ticari uygulamalar.",
    shortDescription:
      "Görsel etki için üretilen perakende sergilemeleri, promosyon objeleri ve markalı ticari uygulamalar.",
    coverImage: "/services/brand-nyx-bottle.jpeg",
    coverPosition: "50% 45%",
    alt: "Commercial brand installation portfolio category cover image",
    href: "/works/commercial-brand-installations",
    introHeading: "Görünürlük ve etki için üretilen marka mekanları ve ticari objeler.",
    intro: [
      "Ticari ve Marka Uygulamaları; ziyaretçi deneyimi için üretilen perakende sergilemelerini, kozmetik objelerini, vitrin parçalarını ve ticari iç mekan elemanlarını kapsar.",
      "Bu işler sergileme, dekor ve montaj uygulamalarında marka görünürlüğünü, üretim kalitesini ve dayanıklı uygulamayı dengeler."
    ],
    images: [
      ...portfolioImageSet("commercial-brand-installations", 12),
      {
        src: "/projects/portfolio/commercial-brand-installations/ardic-branded-spherical-reception-display-01.png",
        alt: "Large spherical reception display object in an Ardic branded premium lobby",
        title: "Markalı Küresel Resepsiyon Objesi",
        description:
          "Markalı bir lobide odak noktası olarak geliştirilen parlak yüzeyli heykelsi sergileme objesi."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/oversized-green-tennis-ball-display-01.png",
        alt: "Oversized green tennis ball display objects arranged in an outdoor production area",
        title: "Büyük Ölçekli Tenis Topu Objeleri",
        description:
          "Ticari bir sunum alanı için üretilen büyük ölçekli spor temalı sergileme objeleri."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/illuminated-sculptural-wings-brand-installation-01.png",
        alt: "Illuminated sculptural red wings installed as a commercial interior feature wall",
        title: "Aydınlatmalı Heykelsi Kanatlar",
        description:
          "Yüksek etkili ticari bir iç mekan için tasarlanan, duvara monte heykelsi uygulama."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/giant-burger-display-object-01.png",
        alt: "Giant burger sculpture produced as a commercial brand display object",
        title: "Dev Burger Sergileme Objesi",
        description:
          "Tanıtım ve perakende sunumu için üretilen gerçekçi, büyük ölçekli burger objesi."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/sculptures-characters-05.jpeg",
        alt: "Assorted oversized fruit display props produced for commercial presentation",
        title: "Büyük Ölçekli Meyve Dekorları",
        description:
          "A group of fruit display objects fabricated as promotional commercial props."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/sculptures-characters-06.jpeg",
        alt: "Oversized meat display props produced for a commercial food presentation",
        title: "Büyük Ölçekli Et Dekorları",
        description:
          "Large food-themed display props created for commercial visual merchandising."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/sculptures-characters-07.jpeg",
        alt: "Oversized bread display props produced for commercial food presentation",
        title: "Büyük Ölçekli Ekmek Dekorları",
        description:
          "Food-themed display objects fabricated for promotional or retail presentation."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/sculptures-characters-08.jpeg",
        alt: "Oversized carrot display object produced as a commercial food prop",
        title: "Büyük Ölçekli Havuç Objesi",
        description:
          "A large food prop shaped and finished for commercial display use."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/sculptures-characters-14.jpeg",
        alt: "Oversized burger prop in workshop production for a commercial food display",
        title: "Burger Sergileme Objesi Üretimi",
        description:
          "A commercial food display prop shown during workshop production."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/historical-thematic-environments-25.jpeg",
        alt: "EPSLAM branded decorative storefront arch produced for a commercial installation",
        title: "EPSLAM Markalı Mağaza Kemeri",
        description:
          "A branded decorative arch element produced as part of a commercial installation."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/historical-thematic-environments-26.jpeg",
        alt: "EPSLAM branded decorative display object produced for a commercial environment",
        title: "EPSLAM Markalı Sergileme Objesi",
        description:
          "A freestanding branded decorative object fabricated for a commercial setting."
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/molds-composite-production-10.jpeg",
        alt: "Finished oversized cosmetic bottle display props for a commercial brand presentation",
        title: "Kozmetik Şişesi Sergileme Objeleri",
        description:
          "Finished oversized cosmetic bottle objects produced for brand-focused commercial display."
      }
    ],
    coverImages: [
      {
        src: "/projects/portfolio/commercial-brand-installations/ardic-branded-spherical-reception-display-01.png",
        alt: "Large spherical reception display object in an Ardic branded premium lobby"
      },
      portfolioImage("/projects/portfolio/commercial-brand-installations/commercial-brand-installations-01.jpeg"),
      portfolioImage("/projects/portfolio/commercial-brand-installations/commercial-brand-installations-06.jpeg"),
      {
        src: "/projects/portfolio/commercial-brand-installations/illuminated-sculptural-wings-brand-installation-01.png",
        alt: "Illuminated sculptural red wings installed as a commercial interior feature wall"
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/oversized-green-tennis-ball-display-01.png",
        alt: "Oversized green tennis ball display objects arranged in an outdoor production area"
      },
      {
        src: "/projects/portfolio/commercial-brand-installations/historical-thematic-environments-25.jpeg",
        alt: "EPSLAM branded decorative storefront arch produced for a commercial installation"
      }
    ],
    featured: true,
    published: true
  }
];

export const portfolioCategories = portfolioCategoryData.map((category, index) => ({
  ...category,
  number: `${index + 1}`.padStart(2, "0"),
  coverImage: category.coverImage ?? getPortfolioImageSrc(category.images[0]),
  coverImages: (category.coverImages ?? [category.coverImage ?? category.images[0]]).map((image, imageIndex) => ({
    src: getPortfolioImageSrc(image),
    alt: getPortfolioImageAlt(image, category.alt ?? `${category.title} kapak görseli ${imageIndex + 1}`)
  })),
  coverPosition: category.coverPosition ?? "50% 50%",
  alt: category.alt ?? `${category.title} portföy kategorisi kapak görseli`,
  imageCount: category.images.length
}));

export const capabilities = [
  "CNC üretim",
  "EPS / XPS işleme",
  "Heykel üretimi",
  "Kalıp sistemleri",
  "Polyester döküm",
  "Yüzey bitirme ve montaj"
];
