import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { GallerySection } from "@/components/gallery/section";

const TEAM_NAMES = [
  "김민준",
  "이서연",
  "박도윤",
  "최지우",
  "정하은",
  "강주원",
  "조서준",
  "윤지안",
  "장은우",
  "임하윤",
  "한도현",
  "오수아",
  "서준서",
  "신예은",
  "권시우",
  "황지호",
  "안서아",
  "송민서",
  "전유준",
  "홍아윤",
];

const CHART_COLOR_COUNT = 5;

function chartColorStyle(index: number) {
  const chartIndex = (index % CHART_COLOR_COUNT) + 1;
  return {
    backgroundColor: `hsl(var(--chart-${chartIndex}) / 0.16)`,
    color: `hsl(var(--chart-${chartIndex}))`,
  };
}

const STATUSES = [
  { label: "온라인", className: "bg-emerald-500" },
  { label: "자리비움", className: "bg-amber-500" },
  { label: "다른 용무 중", className: "bg-rose-500" },
  { label: "오프라인", className: "bg-zinc-400" },
];

export function AvatarGallery() {
  return (
    <div className="flex flex-col gap-4">
      <GallerySection title="크기" description="sm · default · lg 세 가지 크기">
        <Avatar size="sm">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </GallerySection>

      <GallerySection
        title="이미지 아바타"
        description="원격 이미지를 불러오고, 로드에 실패하면 이니셜로 대체됩니다"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <Avatar key={i}>
            <AvatarImage
              src={`https://i.pravatar.cc/150?img=${i + 1}`}
              alt={`avatar-${i + 1}`}
            />
            <AvatarFallback>{i + 1}</AvatarFallback>
          </Avatar>
        ))}
      </GallerySection>

      <GallerySection
        title="이니셜 아바타"
        description="이미지가 없을 때 이름 이니셜과 색상으로 구분합니다"
      >
        {TEAM_NAMES.map((name, i) => (
          <Avatar key={name}>
            <AvatarFallback style={chartColorStyle(i)}>
              {name.slice(1)}
            </AvatarFallback>
          </Avatar>
        ))}
      </GallerySection>

      <GallerySection
        title="상태 배지"
        description="AvatarBadge로 접속 상태를 함께 표시합니다"
      >
        {STATUSES.map((status) => (
          <div key={status.label} className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarFallback>{status.label.slice(0, 1)}</AvatarFallback>
              <AvatarBadge className={status.className} />
            </Avatar>
            <span className="text-xs text-muted-foreground">
              {status.label}
            </span>
          </div>
        ))}
      </GallerySection>

      <GallerySection
        title="아바타 그룹"
        description="여러 아바타를 겹쳐서 표시하고 초과 인원은 카운트로 요약합니다"
        contentClassName="flex flex-wrap items-center gap-8"
      >
        <AvatarGroup>
          {TEAM_NAMES.slice(0, 3).map((name, i) => (
            <Avatar key={name}>
              <AvatarFallback style={chartColorStyle(i)}>
                {name.slice(-1)}
              </AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+{TEAM_NAMES.length - 3}</AvatarGroupCount>
        </AvatarGroup>

        <AvatarGroup>
          {Array.from({ length: 4 }).map((_, i) => (
            <Avatar key={i} size="sm">
              <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 20}`} />
              <AvatarFallback>{i + 1}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>

        <AvatarGroup>
          {Array.from({ length: 3 }).map((_, i) => (
            <Avatar key={i} size="lg">
              <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 30}`} />
              <AvatarFallback>{i + 1}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+12</AvatarGroupCount>
        </AvatarGroup>
      </GallerySection>
    </div>
  );
}
