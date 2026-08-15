"use client";

import { useMemo, useState } from "react";
import { icons, SearchIcon } from "lucide-react";
import { toast } from "sonner";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const ICON_NAMES = Object.keys(icons).sort();

export function IconGallery() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return ICON_NAMES;
    return ICON_NAMES.filter((name) => name.toLowerCase().includes(keyword));
  }, [query]);

  const handleCopy = (name: string) => {
    const snippet = `import { ${name} } from "lucide-react";`;
    navigator.clipboard.writeText(snippet);
    toast(`${name} import 구문이 복사되었습니다`);
  };

  return (
    <div className="flex flex-col gap-4">
      <InputGroup className="max-w-sm">
        <InputGroupAddon>
          <SearchIcon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="아이콘 이름으로 검색 (예: arrow, user, file)"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </InputGroup>

      <p className="text-sm text-muted-foreground">
        전체 {ICON_NAMES.length.toLocaleString()}개 중{" "}
        {filtered.length.toLocaleString()}개 표시 · 클릭하면 import 구문이
        복사됩니다
      </p>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {filtered.map((name) => {
          const Icon = icons[name as keyof typeof icons];
          return (
            <button
              key={name}
              type="button"
              onClick={() => handleCopy(name)}
              title={name}
              className="flex flex-col items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground transition-colors hover:border-primary hover:bg-accent"
            >
              <Icon className="size-5" />
              <span className="w-full truncate text-center text-[10px] text-muted-foreground">
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          &quot;{query}&quot;와 일치하는 아이콘이 없습니다.
        </p>
      )}
    </div>
  );
}
