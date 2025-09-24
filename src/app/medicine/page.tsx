// src/app/medicine/page.tsx 파일 내용

// 필요한 데이터를 가져옵니다.
import { newsData } from '../../data/news'; 
import NewsCard from '../../components/NewsCard.tsx'; 
import Link from 'next/link';

export default function MedicinePage() {
  
  // 1. newsData에서 category가 'medicine'인 기사만 필터링합니다.
  const medicineNews = newsData.filter(article => article.category === 'medicine');
  
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      
      {/* 1. 의료 카테고리 메인 콘텐츠 (2/3 영역) */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-blue-600">의료 카테고리 ({medicineNews.length}개 기사)</h2>
        
        <div className="space-y-4">
          {/* 2. 필터링된 medicineNews를 NewsCard 컴포넌트로 표시합니다. */}
          {medicineNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
          
          {/* 3. 필터링된 결과가 없다면 메시지를 보여줍니다. */}
          {medicineNews.length === 0 && (
            <p className="text-gray-500 mt-6">아직 등록된 의료 기사가 없습니다.</p>
          )}

        </div>
      </div>

      {/* 2. 사이드바 섹션 (1/3 영역) - 임시 사이드바 */}
      <div className="md:col-span-1">
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 border-b pb-2 text-blue-600">최신 의료 기술</h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. AI 진단 혁명</li>
            <li>2. 원격 진료의 미래</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}