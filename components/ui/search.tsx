import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SearchResultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  primaryText: ReactNode;
  secondaryText: ReactNode;
}

export function SearchResult({
  className,
  primaryText,
  secondaryText,
  ...rest
}: SearchResultProps) {
  return (
    <div className={cn("w-full border rounded-lg px-4 py-2 hover:bg-muted-foreground/10 transition-colors", className)} {...rest}>
      <span className="flex flex-col text-left text-sm">
        <span className="font-bold">{primaryText}</span>
        <span>{secondaryText}</span>
      </span>
    </div>
  );
}

export function NoResults() {
  return <div className="border text-center font-bold text-md p-4 text-muted-foreground rounded-lg">No Results Found</div>
}