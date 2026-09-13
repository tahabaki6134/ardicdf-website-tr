import { CompanyAbout } from "@/components/company-about";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
export const metadata = manufacturingMetadata("Hakkımızda · Tasarım ve Üretim Ekibi", "İstanbul merkezli EPSLAM şirketi ARDIÇ; aile üretim deneyimi, mimari tasarım, heykel ve dijital üretim ekibi.", { en: "/about", tr: "/about" }, "tr");
const team: Array<{
  name: string;
  initials: string;
  role: string;
  copy: string;
  photo?: string;
}> = [
  {
    name: "Yusuf Baki",
    initials: "YB",
    role: "Kurucu ve Üretim Direktörü",
    copy: "Üretim stratejisi, atölye yönetimi ve büyük ölçekli proje uygulamalarından sorumludur."
  },
  {
    name: "Taha Baki",
    initials: "TB",
    role: "Mimarlık, Strateji ve Proje Geliştirme",
    copy: "Mimari yön, proje stratejisi, iş geliştirme ve müşteri ilişkilerinden sorumludur."
  },
  {
    name: "Şiba Baki",
    initials: "SB",
    role: "İç Mimarlık ve Sunum",
    copy: "İç mekan tasarımı, sunum geliştirme ve yaratıcı proje anlatımından sorumludur."
  },
  {
    name: "Rasim Gül",
    initials: "RG",
    role: "Görsel Sanatlar Uzmanı",
    copy: "Sanatsal detay, görsel geliştirme ve yüzey bitirme tekniklerinde uzmandır."
  },
  {
    name: "Gençağa Dilli",
    initials: "GD",
    role: "Heykeltıraş",
    copy: "Heykel tasarımı, karakter üretimi ve organik form geliştirmede uzmandır."
  },
  {
    name: "Fatih Dilli",
    initials: "FD",
    role: "Sanat Boyacısı",
    copy: "Sanatsal boyama, ileri renklendirme teknikleri ve özel efektlerde uzmandır.",
    photo: "/team/fatih-dilli.png"
  }
];


export default function AboutPage() { return <CompanyAbout team={team} />; }
