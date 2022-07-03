import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonCardProps {
  lesson: {
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: "live" | "class";
  };
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const lessonIsAvailable = isPast(lesson.availableAt);

  return (
    <Link to={`/event/lessons/${lesson.slug}`} className="group">
      <span className="text-gray-300">
        {format(lesson.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          locale: ptBR,
        })}
      </span>

      <div className="p-4 mt-2 rounded border border-gray-500 group-hover:border-green-500">
        <header className="flex items-center justify-between mb-4">
          {lessonIsAvailable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle size={20} /> Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span className="py-[2px] px-2 text-xs rounded text-white font-bold border border-green-300">
            {lesson.lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200">{lesson.title}</strong>
      </div>
    </Link>
  );
};

export default LessonCard;
