import Link from "next/link";

import { ChartGallery } from "@/components/charts/chart-gallery";

export default function ChartsGalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-5xl items-center gap-4 px-5">
          <Link href="/" className="text-sm underline-offset-4 hover:underline">
            ← 홈으로
          </Link>
          <span className="text-lg font-semibold tracking-tight">
            차트 갤러리
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">차트 갤러리</h1>
            <p className="text-muted-foreground">
              recharts 기반 shadcn/ui Chart 컴포넌트로 구현한 다양한 차트 유형을
              모아 살펴볼 수 있습니다.
            </p>
          </div>

          <ChartGallery />
        </div>
      </main>
    </div>
  );
}
