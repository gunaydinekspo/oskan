import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-rose-500 transition-colors mb-8"
      >
        <ChevronLeft size={16} /> Ana Sayfaya Dön
      </Link>

      <div className="bg-white rounded-2xl border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-gray-100">
          Son güncelleme: {lastUpdated}
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mt-8 mb-3">{title}</h2>
      <div className="space-y-3 text-sm">{children}</div>
    </div>
  );
}
