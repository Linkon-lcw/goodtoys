'use client';
import Image from "next/image";
import devsettings from '../devsettings.js';

export default function SquareCard({ title = '标题', description = '介绍内容，可换行显示。', frameworkUrl = 'http://example.org' }) {
    if (devsettings.isLoad) {
        imageUrl = devsettings.imageUrl;
        frameworkUrl = devsettings.frameworkUrl;
      }
    return (
        <div className="w-auto h-auto bg-white/70 dark:bg-black/70 rounded-xl p-6 shadow-lg flex flex-col border-2 border-gray-300">
            <div className="aspect-square border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <iframe src={frameworkUrl} className="w-full h-full"></iframe>
            </div>
            <div className="flex-1 p-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
}