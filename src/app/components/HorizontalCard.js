'use client';
import Image from "next/image";

export default function HorizontalCard({ title = '名称', description = '介绍内容', imageUrl = '/avatar.svg', frameworkUrl = '' }) {
  return (
    <div className="w-full min-h-[300px] bg-white/70 dark:bg-black/70 rounded-xl p-4 shadow-lg flex flex-col md:flex-row border-2 border-gray-300">
      <div className="w-auto h-4/6 md:w-4/6 md:h-auto border-2 border-gray-300 rounded-lg flex items-center justify-center">
        <iframe src={frameworkUrl} className="w-full h-full"></iframe>
      </div>
      <div className="w-auto h-auto md:w-2/6 md:h-full pl-4 flex flex-col justify-center align-top">
        <div className="text-center max-h-28 md:max-h-96">
          <Image src={imageUrl} alt="头像" width={64} height={64} className="rounded-full mx-auto border-2 border-gray-200 " />
          <h2 className="text-2xl font-semibold text-center mt-0">{title}</h2>
        </div>
        <p className="text-gray-500 text-center mt-0 flex-1">{description}</p>
        <div className="flex justify-center mt-0">
          <a href={frameworkUrl} target="_blank" rel="noopener noreferrer" className="w-full h-8 text-center flex justify-center content-center p-0 bg-gray-300 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md">
            查看
          </a>
        </div>
      </div>
    </div >
  );
}