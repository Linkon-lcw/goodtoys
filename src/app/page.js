'use client';
import { useState } from "react";
import HorizontalCard from "./components/HorizontalCard";
import SquareCard from "./components/SquareCard";
import CompactCard from "./components/CompactCard";

export default function Home() {
    const [background, setBackground] = useState("");

    return (
        <div className="flex justify-center content-center flex-col" style={{ width: '100%', height: '100%' }}>
            <div className="w-full flex justify-center content-center">
                <h1 className="flex-1 text-4xl font-bold text-center " style={{ marginTop: '2rem' }}>好东西就要来了！</h1>
            </div>
            <div className="w-full flex justify-center content-center">
                <div className="w-full" style={{ maxWidth: '120vh' }}>
                    <div className="flex flex-col min-h-screen w-full" >
                        <div className="flex flex-wrap gap-4 p-8  justify-center">
                            <HorizontalCard title="Fold Craft Launcher" description="在手机上运行Java版Minecraft" imageUrl="https://foldcraftlauncher.cn/file/picture/FCL_icon.webp" frameworkUrl="https://foldcraftlauncher.cn" />
                            <SquareCard title="方形卡片" description="这是一个方形布局的卡片" imageUrl="/avatar.svg" />
                            <CompactCard title="紧凑卡片" imageUrl="/avatar.svg" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}