// src/app/health/page.tsx 파일 내용

// 1. newsData 전체를 가져옵니다.
import { newsData } from '@/data/news';

export default function HealthPage() {
  
  // 2. newsData에서 category가 'health'인 기사만 필터링합니다.
  const healthNews = newsData.filter(article => article.category === 'health');
  
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      
      {/* 1. 건강 카테고리 메인 콘텐츠 (2/3 영역) */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-green-600">건강 카테고리 ({healthNews.length}개 기사)</h2>
        
        <div className="space-y-4">
          {/* 3. 필터링된 healthNews만 반복하여 뉴스 목록을 생성합니다. */}
          {healthNews.map(article => (
            <a 
              key={article.id} 
              href={`/news/${article.id}`} // 동적 라우팅 주소로 연결
              className="block border p-4 rounded-lg shadow-sm hover:bg-green-50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-green-700">제목: {article.title}</h3>
              <p className="text-gray-600 mt-1">{article.summary}</p>
            </a>
          ))}
          
          {/* 4. 필터링된 결과가 없다면 메시지를 보여줍니다. */}
          {healthNews.length === 0 && (
            <p className="text-gray-500 mt-6">아직 등록된 건강 기사가 없습니다.</p>
          )}

        </div>
      </div>

      {/* 2. 사이드바 섹션 (1/3 영역) - 임시 사이드바 */}
      <div className="md:col-span-1">
        
        <div className="bg-green-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 border-b pb-2 text-green-600">건강 관련 인기 주제</h2>
          <ul className="space-y-2 text-gray-700">
            <li>1. 면역력 강화 식품</li>
            <li>2. 스트레스 해소 운동법</li>
            <li>3. 영양제 바로 알기</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}