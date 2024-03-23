import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-primary",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export default function CourseProgress({
  value,
  size,
  variant,
}: CourseProgressProps) {
  return (
    <div>
      <Progress variant={variant} className="h-2" value={value} />
      <p
        className={cn(
          "mt-2 font-medium text-primary",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"],
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
}
