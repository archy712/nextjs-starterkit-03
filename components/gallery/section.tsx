import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GallerySection({
  title,
  description,
  children,
  contentClassName,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  contentClassName?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent
        className={contentClassName ?? "flex flex-wrap items-center gap-4"}
      >
        {children}
      </CardContent>
    </Card>
  );
}
