import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle } from "lucide-react";

const bannerVariant = cva(
  "border text-center p-4 text-sm flex items-center w-full",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200/80 border-yellow-300 text-primary",
        success: "bg-emerald-700 border-emerald-800 text-secondary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  },
);

interface BannerProps extends VariantProps<typeof bannerVariant> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
};

export default function Banner({ label, variant }: BannerProps) {
  const Icon = iconMap[variant || "warning"];

  return (
    <div className={cn(bannerVariant({ variant }))}>
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </div>
  );
}
