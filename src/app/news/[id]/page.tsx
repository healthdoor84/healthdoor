// src/app/news/[id]/page.tsx 파일 내용

// Next.js는 이 페이지에 접근할 때 주소창의 [id] 값을 params 객체로 전달합니다.
// 예를 들어, /news/456으로 접속하면 params.id는 '456'이 됩니다.
export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const articleId = params.id;

  // 실제 프로젝트에서는 이 articleId를 사용하여 데이터베이스에서 기사 내용을 가져옵니다.

  return (
    <div className="max-w-4xl mx-auto py-8">
      
      {/* 1. 기사 제목 */}
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        제 {articleId}번 기사 제목: 여름철 건강 관리의 중요성
      </h1>
      
      {/* 2. 기사 정보 */}
      <p className="text-gray-500 mb-8 border-b pb-4">
        발행일: 2025-09-25 | 기자: healthdoor 편집부
      </p>

      {/* 3. 기사 본문 (임시 내용) */}
      <div className="prose max-w-none text-lg leading-relaxed space-y-4">
        <p>
          안녕하십니까. 현재 보고 계신 기사는 {articleId}번 기사 템플릿입니다.
          이 페이지는 하나의 파일로 모든 기사 페이지를 처리하는 **동적 라우팅** 기능을 사용합니다.
        </p>
        <p>
          실제로 이 기사 번호({articleId})를 이용해서 서버에서 데이터를 불러와
          각 기사에 맞는 내용과 이미지를 표시하게 됩니다.
        </p>
        <p>
          오늘은 여름철 건강 관리의 중요성에 대해 깊이 있는 정보를 제공합니다. 수분 섭취의 중요성과
          냉방병 예방법 등 필수적인 정보를 확인하세요.
        </p>
      </div>

    </div>
  );
}