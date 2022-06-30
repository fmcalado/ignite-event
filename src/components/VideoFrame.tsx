import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from 'phosphor-react';
import React from 'react';

const VideoFrame: React.FC = () => {
  return (
    <div className='flex-1'>
      <div className='flex justify-center bg-black'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video border'>
          video
        </div>
      </div>

      <div className='max-w-[1100px] p-8 mx-auto'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>
            Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>

            <div className='flex items-center mt-6 gap-6'>
              <img 
                className='h-16 w-16 p-1 rounded-full border-2 border-blue-500'
                src="https://github.com/fmcalado.png" 
                alt=""              
              />

              <div className='leading-relaxed'>
                <strong className='block text-2xl font-bold'>
                  Calado
                </strong>
                <span className='block text-sm text-gray-200'>
                  Junior Web Developer
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <a href="#" className='btn bg-green-500 hover:bg-green-700'>
              <DiscordLogo size={24}/>
              Comunidade no Discord
            </a>

            <a href="#" className='btn border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900'>              
              <Lightning size={24}/>
              Acesse o Desafio
            </a>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-8 mt-20'>
          <a href="#" className='flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors'>
            <div className='flex items-center h-full p-6 bg-green-700'>
              <FileArrowDown size={40}/>
            </div>
            <div className='leading-relaxed py-6'>
              <strong className='text-2xl'>Material complementar</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className='flex items-center h-full p-6'>
              <CaretRight size={24}/>
            </div>
          </a>

          <a href="#" className='flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors'>
            <div className='flex items-center h-full p-6 bg-green-700'>
              <ImageSquare size={40}/>
            </div>
            <div className='leading-relaxed py-6'>
              <strong className='text-2xl'>Wallpapers exclusivos</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className='flex items-center h-full p-6'>
              <CaretRight size={24}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoFrame;