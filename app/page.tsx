import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hasEnvVars } from "@/lib/utils";
import {
  ArrowRight,
  BarChart3Icon,
  LayoutGridIcon,
  SmileIcon,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const FEATURES = [
  {
    title: "Next.js 16 App Router",
    description:
      'Cache Components("use cache")를 활성화한 최신 App Router 아키텍처를 기본으로 제공합니다.',
  },
  {
    title: "Supabase Auth",
    description:
      "이메일/비밀번호 인증과 Google OAuth 로그인을 @supabase/ssr 기반 쿠키 세션으로 지원합니다.",
  },
  {
    title: "Tailwind CSS v4 + shadcn/ui",
    description:
      "new-york 스타일의 shadcn/ui 컴포넌트와 다크모드 전환을 기본 제공합니다.",
  },
  {
    title: "개발 도구 자동화",
    description:
      "ESLint, Prettier, Husky, lint-staged, commitlint로 커밋 전 검사를 자동화했습니다.",
  },
];

const GALLERIES = [
  {
    icon: LayoutGridIcon,
    title: "shadcn/ui 컴포넌트 갤러리",
    description:
      "Button, Form, Dialog 같은 shadcn/ui 공식 컴포넌트부터 Tree View·데이터 테이블 같은 확장 컴포넌트까지 한 곳에서 살펴볼 수 있습니다.",
    href: "/gallery",
    cta: "컴포넌트 갤러리 보기",
  },
  {
    icon: SmileIcon,
    title: "아이콘 갤러리",
    description:
      "이 프로젝트에 포함된 lucide-react 아이콘 전체를 검색하고 클릭 한 번으로 import 구문을 복사할 수 있습니다.",
    href: "/icons",
    cta: "아이콘 갤러리 보기",
  },
  {
    icon: UserCircleIcon,
    title: "아바타 갤러리",
    description:
      "크기, 이미지, 이니셜, 상태 배지, 그룹 표시까지 Avatar 컴포넌트의 다양한 활용 방법을 모아볼 수 있습니다.",
    href: "/avatars",
    cta: "아바타 갤러리 보기",
  },
  {
    icon: BarChart3Icon,
    title: "차트 갤러리",
    description:
      "recharts 기반 shadcn/ui Chart 컴포넌트로 구현한 막대·선·영역·파이·레이더 등 다양한 차트 유형을 살펴볼 수 있습니다.",
    href: "/charts",
    cta: "차트 갤러리 보기",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-5xl items-center justify-between px-5">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            next.js starter-kit v3
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            {!hasEnvVars ? (
              <EnvVarWarning />
            ) : (
              <Suspense>
                <AuthButton />
              </Suspense>
            )}
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col gap-20 px-5 py-16">
          <section className="flex flex-col gap-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
              <Badge variant="outline" className="w-fit">
                Starter Kit
              </Badge>
              <h1 className="text-3xl !leading-tight font-bold lg:text-4xl">
                next.js starter-kit v3
              </h1>
              <p className="text-muted-foreground">
                Next.js 16과 Supabase Auth로 인증까지 준비된 상태에서 바로
                개발을 시작할 수 있는 스타터킷입니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">갤러리 모음</h2>
              <p className="text-muted-foreground">
                UI를 빠르게 조립할 수 있도록 컴포넌트·아이콘·아바타·차트를
                갤러리 형태로 모아두었습니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {GALLERIES.map((gallery) => (
                <Card key={gallery.href} className="flex flex-col">
                  <CardHeader className="flex-1">
                    <gallery.icon className="mb-2 size-6 text-muted-foreground" />
                    <CardTitle className="text-lg">{gallery.title}</CardTitle>
                    <CardDescription>{gallery.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <Link href={gallery.href}>
                        {gallery.cta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="flex w-full items-center justify-center border-t py-8 text-center text-sm text-muted-foreground">
        <p>
          Developed by{" "}
          <a
            href="mailto:archy712@gmail.com"
            className="font-medium underline-offset-4 hover:underline"
          >
            archy712@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
