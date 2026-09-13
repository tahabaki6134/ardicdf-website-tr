import { WorkshopPage } from "@/components/workshop-page";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
export const metadata = manufacturingMetadata("Üretim Atölyesi · Projeden Montaja", "İstanbul atölyemizde CNC, kompozit, epoksi döküm, 3D baskı ve ahşap üretimi. Komple mobilya ve cephe elemanlarında imalat ve montaj.", { en: "/fabrication", tr: "/fabrication" }, "tr");
export default function FabricationPage() { return <WorkshopPage />; }
