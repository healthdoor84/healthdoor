// src/components/NewsCard.tsx 파일 내용

import Link from 'next/link';

// 기사 데이터의 타입을 정의합니다.
interface Article {
  id: number;
  title: string;
  summary: string;
  category: 'health' | 'medicine' | 'column'; 
}

// NewsCard 컴포넌트는 부모 컴포넌트(페이지)로부터 article 객체를 받습니다.
interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    // 기사를 클릭하면 동적 라우팅으로 news/101, news/202 등으로 이동합니다.
    <Link href={`/news/${article.id}`} className="block border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-1 hover:text-red-600 transition-colors">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 mb-3 capitalize">
        카테고리: {article.category}
      </p>
      <p className="text-gray-600">
        {article.summary}
      </p>
    </Link>
  );
}