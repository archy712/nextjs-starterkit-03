"use client";

import * as React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { MultiSelect } from "@/components/ui/multi-select";
import { Rating } from "@/components/ui/rating";
import { GallerySection } from "@/components/gallery/section";

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

const paymentsData: Payment[] = [
  { id: "1", amount: 100000, status: "success", email: "kim@example.com" },
  { id: "2", amount: 25000, status: "processing", email: "lee@example.com" },
  { id: "3", amount: 480000, status: "success", email: "park@example.com" },
  { id: "4", amount: 12000, status: "failed", email: "choi@example.com" },
  { id: "5", amount: 68000, status: "pending", email: "jung@example.com" },
];

const statusLabel: Record<Payment["status"], string> = {
  pending: "대기",
  processing: "처리 중",
  success: "완료",
  failed: "실패",
};

const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: "이메일",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => (
      <Badge variant="outline">
        {statusLabel[row.getValue<Payment["status"]>("status")]}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-ml-3"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        금액
        <ArrowUpDown className="size-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">
        ₩{row.getValue<number>("amount").toLocaleString()}
      </div>
    ),
  },
];

const skillOptions = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "TypeScript", value: "typescript" },
  { label: "Tailwind CSS", value: "tailwind" },
  { label: "Supabase", value: "supabase" },
];

const MORE_RECOMMENDATIONS = [
  {
    title: "Date Range Picker",
    description:
      "예약·통계 대시보드의 기간 필터에 자주 쓰이며, 이미 설치된 Calendar + Popover 조합으로 직접 구성할 수 있습니다.",
  },
  {
    title: "Rich Text Editor (예: Tiptap)",
    description:
      "게시글·댓글 등 서식이 필요한 입력에 필요하지만 shadcn/ui 코어에는 없습니다.",
  },
  {
    title: "File Dropzone / Uploader",
    description:
      "react-dropzone 등과 Attachment 컴포넌트를 조합해 업로드 UI를 구성하면 좋습니다.",
  },
  {
    title: "Kanban Board (예: dnd-kit)",
    description:
      "작업 관리형 화면에서 자주 필요하며 Card + dnd-kit으로 조합 가능합니다.",
  },
];

export function RecommendedExtensionsSection() {
  const [skills, setSkills] = React.useState<string[]>(["react", "nextjs"]);
  const [rating, setRating] = React.useState(4);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        아래는 shadcn/ui 공식 갤러리에는 없지만 실무에서 자주 필요한 확장
        컴포넌트를 이 프로젝트에 맞게 직접 구현하거나 조합해 추가한 예시입니다.
      </p>

      <GallerySection
        title="Data Table (TanStack Table)"
        description="정렬·페이지네이션을 지원하는 데이터 테이블. shadcn Table + @tanstack/react-table 조합으로 구현했습니다."
        contentClassName="w-full"
      >
        <DataTable columns={paymentColumns} data={paymentsData} />
      </GallerySection>

      <GallerySection
        title="Multi Select"
        description="여러 값을 태그로 선택하는 콤보박스. Command + Popover + Badge 조합으로 구현했습니다."
      >
        <div className="w-full max-w-sm">
          <MultiSelect
            options={skillOptions}
            selected={skills}
            onChange={setSkills}
            placeholder="기술 스택 선택"
          />
        </div>
      </GallerySection>

      <GallerySection title="Rating" description="별점 입력 컴포넌트">
        <Rating value={rating} onChange={setRating} />
        <span className="text-sm text-muted-foreground">{rating} / 5</span>
      </GallerySection>

      <GallerySection
        title="추가로 고려해볼 확장 컴포넌트"
        description="실무에서 자주 쓰이지만 아직 이 갤러리에 구현하지 않은 후보들"
        contentClassName="grid w-full gap-4 sm:grid-cols-2"
      >
        {MORE_RECOMMENDATIONS.map((item) => (
          <div key={item.title} className="rounded-md border p-4">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </GallerySection>
    </div>
  );
}
