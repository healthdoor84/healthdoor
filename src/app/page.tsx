// src/app/page.tsx 파일 내용

// 1. newsData를 가져옵니다.
import { newsData } from '@/data/news';

export default function Home() {
  // 화면에 표시할 뉴스 (여기서는 모든 뉴스를 사용)
  const mainNews = newsData;

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      
      {/* 1. 메인 뉴스 섹션 (2/3 영역) */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-gray-800">주요 뉴스</h2>
        
        <div className="space-y-4">
          {/* 2. newsData를 반복하여 뉴스 목록을 생성합니다. */}
          {mainNews.map(article => (
            <a 
              key={article.id} // React는 반복되는 요소에 key가 필요합니다.
              href={`/news/${article.id}`} // 동적 라우팅 주소로 연결합니다.
              className="block border p-4 rounded-lg shadow-sm hover:bg-red-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-red-600">제목: {article.title}</h3>
              <p className="text-gray-600 mt-1">{article.summary}</p>
            </a>
          ))}
        </div>
      </div>

      {/* 3. 사이드바 섹션 (1/3 영역) - 이전과 동일 */}
      <div className="md:col-span-1">
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 border-b pb-2 text-red-600">인기 기사</h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. 아침 운동 vs 저녁 운동, 뭐가 더 좋을까?</li>
            <li>2. 커피 하루 몇 잔이 적당한가</li>
            <li>3. 치과 검진 미루면 안 되는 이유</li>
          </ul>
        </div>
        
        <div className="mt-8 bg-yellow-100 p-8 text-center text-gray-700 rounded-lg shadow-md">
          <p className="font-semibold">여기는 광고 또는 특별 콘텐츠 영역입니다</p>
        </div>
        
      </div>
    </div>
  );
}