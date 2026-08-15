import Link from "next/link";

import { IconGallery } from "@/components/icons/icon-gallery";

export default function IconsGalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-5xl items-center gap-4 px-5">
          <Link href="/" className="text-sm underline-offset-4 hover:underline">
            ← 홈으로
          </Link>
          <span className="text-lg font-semibold tracking-tight">
            lucide-react 아이콘 갤러리
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">아이콘 갤러리</h1>
            <p className="text-muted-foreground">
              이 프로젝트에 포함된 lucide-react의 모든 아이콘을 검색하고 바로
              import 구문을 복사할 수 있습니다.
            </p>
          </div>

          <IconGallery />
        </div>
      </main>
    </div>
  );
}
