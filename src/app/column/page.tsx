// src/app/column/page.tsx 파일 내용

// 필요한 데이터를 가져옵니다.
import { newsData } from '../../data/news'; // 경로를 다시 확인합니다.
import NewsCard from '../../components/NewsCard.tsx'; // 경로를 다시 확인합니다.
import Link from 'next/link';

export default function ColumnPage() {
  
  // 1. newsData에서 category가 'column'인 기사만 필터링합니다.
  const columnNews = newsData.filter(article => article.category === 'column');
  
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      
      {/* 1. 칼럼 카테고리 메인 콘텐츠 (2/3 영역) */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-green-600">칼럼 카테고리 ({columnNews.length}개 기사)</h2>
        
        <div className="space-y-4">
          {/* 2. 필터링된 columnNews를 NewsCard 컴포넌트로 표시합니다. */}
          {columnNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
          
          {/* 3. 필터링된 결과가 없다면 메시지를 보여줍니다. */}
          {columnNews.length === 0 && (
            <p className="text-gray-500 mt-6">아직 등록된 칼럼 기사가 없습니다.</p>
          )}

        </div>
      </div>

      {/* 2. 사이드바 섹션 (1/3 영역) - 임시 사이드바 */}
      <div className="md:col-span-1">
        
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 border-b pb-2 text-green-600">인기 칼럼니스트</h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. 김건강 에세이</li>
            <li>2. 최의학 박사 칼럼</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}