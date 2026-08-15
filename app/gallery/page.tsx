import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiElementsSection } from "@/components/gallery/ai-elements-section";
import { ButtonsSection } from "@/components/gallery/buttons-section";
import { DataDisplaySection } from "@/components/gallery/data-display-section";
import { FeedbackSection } from "@/components/gallery/feedback-section";
import { FormsSection } from "@/components/gallery/forms-section";
import { LayoutSection } from "@/components/gallery/layout-section";
import { NavigationSection } from "@/components/gallery/navigation-section";
import { OverlaysSection } from "@/components/gallery/overlays-section";
import { RecommendedExtensionsSection } from "@/components/gallery/recommended-extensions-section";
import { TreeExtensionSection } from "@/components/gallery/tree-extension-section";

const CATEGORIES = [
  { value: "buttons", label: "버튼 & 배지", content: <ButtonsSection /> },
  { value: "forms", label: "폼 입력", content: <FormsSection /> },
  { value: "overlays", label: "오버레이 & 메뉴", content: <OverlaysSection /> },
  { value: "navigation", label: "내비게이션", content: <NavigationSection /> },
  { value: "layout", label: "레이아웃", content: <LayoutSection /> },
  { value: "feedback", label: "피드백", content: <FeedbackSection /> },
  { value: "data", label: "데이터 표시", content: <DataDisplaySection /> },
  { value: "ai", label: "AI 채팅 요소", content: <AiElementsSection /> },
];

const EXTENSION_CATEGORIES = [
  { value: "tree", label: "Tree View", content: <TreeExtensionSection /> },
  {
    value: "recommended",
    label: "추천 확장 컴포넌트",
    content: <RecommendedExtensionsSection />,
  },
];

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-5xl items-center gap-4 px-5">
          <Link href="/" className="text-sm underline-offset-4 hover:underline">
            ← 홈으로
          </Link>
          <span className="text-lg font-semibold tracking-tight">
            shadcn/ui 컴포넌트 갤러리
          </span>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col gap-8 px-5 py-16">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">컴포넌트 갤러리</h1>
            <p className="text-muted-foreground">
              shadcn/ui 공식 레지스트리의 모든 컴포넌트와, 실무에서 자주 쓰이는
              확장 컴포넌트를 함께 모아 살펴볼 수 있습니다.
            </p>
          </div>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">shadcn/ui 공식 컴포넌트</h2>
            <Tabs defaultValue="buttons">
              <TabsList className="flex h-auto flex-wrap justify-start gap-1">
                {CATEGORIES.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {CATEGORIES.map((category) => (
                <TabsContent
                  key={category.value}
                  value={category.value}
                  className="mt-6"
                >
                  {category.content}
                </TabsContent>
              ))}
            </Tabs>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">확장 컴포넌트</h2>
              <Badge variant="outline">비공식 / 커스텀</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              shadcn/ui 공식 레지스트리에는 없지만, 커뮤니티 레지스트리에서
              설치했거나 이 스타터킷에서 직접 조합해 만든 컴포넌트입니다.
            </p>
            <Tabs defaultValue="tree">
              <TabsList>
                {EXTENSION_CATEGORIES.map((category) => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {EXTENSION_CATEGORIES.map((category) => (
                <TabsContent
                  key={category.value}
                  value={category.value}
                  className="mt-6"
                >
                  {category.content}
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </div>
      </main>
    </div>
  );
}
