import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { hasEnvVars } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
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

          <section>
            <Card>
              <CardHeader className="items-center text-center">
                <CardTitle className="text-2xl">
                  shadcn/ui 컴포넌트 갤러리
                </CardTitle>
                <CardDescription className="max-w-xl">
                  Button, Form, Dialog 같은 shadcn/ui 공식 컴포넌트부터 Tree
                  View·데이터 테이블 같은 확장 컴포넌트까지 한 곳에서 살펴볼 수
                  있습니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button asChild>
                  <Link href="/gallery">
                    컴포넌트 갤러리 보기
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
