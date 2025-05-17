'use client';
import Image from "next/image";
import devsettings from '../devsettings.js';
import "../styles/HorizontalCard.css"

export default function HorizontalCard({ title = '名称', description = '介绍内容', imageUrl = '/avatar.svg', frameworkUrl = '' }) {
  if (devsettings.isLoad) {
    imageUrl = devsettings.imageUrl;
    frameworkUrl = devsettings.frameworkUrl;
  }

  return (
    <> 
      {/* <link rel="stylesheet" href="../styles/HorizontalCard.css" /> */}
      <div className="horizontal-card">
        <div className="iframe-container">
          <iframe src={frameworkUrl} className="w-full h-full"></iframe>
        </div>
        <div className="content-container">
          <div className="image-title-container">
            <Image src={imageUrl} alt="头像" width={64} height={64} className="rounded-full mx-auto border-2 border-gray-200 " />
            <h2 className="text-2xl font-semibold text-center mt-0">{title}</h2>
          </div>
          <p className="description">{description}</p>
          <div className="view-button-container">
            <a href={frameworkUrl} target="_blank" rel="noopener noreferrer" className="view-button">
              查看
            </a>
          </div>
        </div>
      </div>
    </>
  );
}