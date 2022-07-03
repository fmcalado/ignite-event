import React from "react";
import { useParams } from "react-router-dom";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  ImageSquare,
  Lightning,
  Spinner,
} from "phosphor-react";

import { useLesson } from "../hooks/useLesson";
import "@vime/core/themes/default.css";

type Slug = {
  lesson_slug: string;
};

const VideoSection: React.FC = () => {
  const { lesson_slug: slug } = useParams<Slug>();
  const { data, loading } = useLesson(slug);

  return (
    <>
      <div className="flex justify-center bg-black">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          {data === undefined ? (
            <div className="flex items-center justify-center h-full">
              <Spinner />
            </div>
          ) : (
            <Player>
              <Youtube videoId={data.lesson.videoId} />
              <DefaultUi />
            </Player>
          )}
        </div>
      </div>

      <div className="max-w-[1100px] p-8 mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {loading ? "Carregando..." : data?.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {loading ? "Carregando..." : data?.lesson.description}
            </p>

            <div className="flex items-center mt-6 gap-6">
              <img
                className="h-16 w-16 p-1 rounded-full border-2 border-blue-500"
                src={loading ? "Carregando..." : data?.lesson.teacher.avatarURL}
                alt="Teacher's Avatar"
              />

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">
                {loading ? "Carregando..." : data?.lesson.teacher.name}
                </strong>
                <span className="block text-sm text-gray-200">
                {loading ? "Carregando..." : data?.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="btn bg-green-500 hover:bg-green-700">
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>

            <a
              href="#"
              className="btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900"
            >
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          <a
            href="#"
            className="flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="leading-relaxed py-6">
              <strong className="text-2xl">Material complementar</strong>
              <p className="mt-2 text-sm text-gray-200">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center h-full p-6">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center h-full p-6 bg-green-700">
              <ImageSquare size={40} />
            </div>
            <div className="leading-relaxed py-6">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="mt-2 text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="flex items-center h-full p-6">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
