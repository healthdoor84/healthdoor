// src/app/health/page.tsx 파일 내용

export default function HealthPage() {
  return (
    // Grid를 사용하여 홈페이지와 동일한 레이아웃 구조를 사용합니다.
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      
      {/* 1. 건강 카테고리 메인 콘텐츠 (2/3 영역) */}
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2 text-green-600">건강 카테고리</h2>
        
        <div className="space-y-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-700">생활 속 건강 팁: 물 마시기 습관</h3>
            <p className="text-gray-600 mt-1">하루 8잔 물 마시기의 놀라운 효과와...</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-700">다이어트 성공의 핵심은 식단 구성</h3>
            <p className="text-gray-600 mt-1">극단적인 절식 대신 균형 잡힌 식단이...</p>
          </div>
        </div>
      </div>

      {/* 2. 사이드바 섹션 (1/3 영역) - 공통 사이드바 */}
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