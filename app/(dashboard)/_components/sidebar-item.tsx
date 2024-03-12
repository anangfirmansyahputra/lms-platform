"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  href,
  icon: Icon,
  label,
}: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600",
        isActive &&
          "bg-orange-200/20 text-orange-700 hover:bg-orange-200/20 hover:text-orange-700",
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-orange-600")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto h-full border-2 border-orange-700 opacity-0 transition-all",
          isActive && "opacity-100",
        )}
      />
    </button>
  );
}
