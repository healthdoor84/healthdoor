// src/components/Header.tsx 파일 내용

import Link from 'next/link';

export default function Header() {
  return (
    // 이전에 layout.tsx에 있던 Header 내용 전체를 가져옵니다.
    <header className="bg-white border-b-2 border-red-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* 로고: 홈페이지로 연결하도록 Link를 사용합니다. */}
        <Link href="/" className="text-2xl font-bold text-red-600">
          healthdoor
        </Link>
        
        {/* 주요 내비게이션 메뉴 */}
        <nav className="space-x-4">
          <Link href="/health" className="text-gray-600 hover:text-red-600 font-semibold">건강</Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 font-semibold">의료</Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 font-semibold">칼럼</Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 font-semibold">커뮤니티</Link>
        </nav>
        
      </div>
    </header>
  );
}