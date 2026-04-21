import { Card, CardContent } from "@/components/pieces/card";
import { Badge } from "@/components/pieces/badge";
import { Button } from "@/components/pieces/button";
import { Play, Check } from "lucide-react";

type CourseStatus = "completed" | "in-progress";

interface CourseCardProps {
  title: string;
  subtitle: string;
  lessonCount: number;
  status: CourseStatus;
  startDate?: string; 
  isLast?: boolean;   
}

export function CourseCard({ title, subtitle, lessonCount, status, startDate, isLast }: CourseCardProps) {
  const isCompleted = status === "completed";

  return (
    <Card className={`relative ${isCompleted ? "bg-green-50" : "bg-pink-50"}`}>
      <CardContent className="p-6">
        {/* Timeline verticale (gauche) */}
        <div className="absolute left-6 top-6 bottom-0 w-px bg-border">
          {!isLast && <div className="absolute left-1/2 top-8 h-8 w-px bg-primary" />}
        </div>

        {/* Cercle de progression */}
        <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-primary">
          {isCompleted ? <Check className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
        </div>

        <div className="ml-14">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <Badge variant={isCompleted ? "default" : "secondary"}>
              {isCompleted ? "Завершен" : "Начат"}
            </Badge>
          </div>

          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          <p className="text-xs text-muted-foreground mt-2">{lessonCount} уроков</p>

          {startDate && (
            <p className="text-xs text-rose-500 mt-1">Начат: {startDate}</p>
          )}

          <Button variant="ghost" className="absolute right-6 top-6">
            
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}