import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Lesson } from "../lib/types/lesson";

const LessonCard: React.FC<Lesson> = ({
  title,
  slug,
  availableAt: strAvailable,
  lessonType,
}) => {
  const availableAt = new Date(strAvailable);
  const lessonIsAvailable = isPast(availableAt);

  return (
    <a href={`/lessons/${slug}`}>
      <span className="text-gray-300">
        {format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
          locale: ptBR,
        })}
      </span>

      <div className="p-4 mt-2 rounded border border-gray-500">
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
            {lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200">{title}</strong>
      </div>
    </a>
  );
};

export default LessonCard;
