'use client';
import Image from "next/image";

export default function CompactCard({ title = '标题', imageUrl = '/avatar.svg' }) {
  return (
    <div className="w-auto h-24 bg-white/70 dark:bg-black/70 rounded-full p-4 shadow-lg flex items-center border-2 border-gray-300">
      <Image src={imageUrl} alt="头像" width={48} height={48} className="rounded-full" />
      <div className="ml-4 flex-1">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}