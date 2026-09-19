"use client";
import { useState } from "react";
import { getProject } from "@/lib/projects";
import { EnquiryForm } from "./enquiry-form";

export function ContactForm({ initialMethod = "", initialAlternative = "", initialSelected = [] }: {
  initialMethod?: string; initialAlternative?: string; initialSelected?: string[];
}) {
  const [selected, setSelected] = useState(initialSelected);
  function remove(id: string) {
    const next = selected.filter(item => item !== id);
    setSelected(next);
    const url = new URL(window.location.href);
    if (next.length) url.searchParams.set("selected", next.join(",")); else url.searchParams.delete("selected");
    window.history.replaceState(null, "", url);
  }
  const selection = selected.length > 0 ? <div>
    <p className="text-sm font-semibold">Seçilen proje örnekleri</p>
    <ul className="mt-2 space-y-2">{selected.map(id => <li key={id} className="flex min-w-0 items-center justify-between gap-3 bg-porcelain p-3 text-sm">
      <span>{getProject(id)?.title}</span>
      <button type="button" onClick={() => remove(id)} className="min-h-11 shrink-0 px-2 underline">Kaldır</button>
    </li>)}</ul>
  </div> : null;
  return <EnquiryForm initialMethod={initialMethod} initialAlternative={initialAlternative} selectedProjects={selected} selection={selection} />;
}
