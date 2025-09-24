// src/components/Footer.tsx 파일 내용

export default function Footer() {
  return (
    // 이전에 layout.tsx에 있던 Footer 내용 전체를 가져옵니다.
    <footer className="bg-gray-100 mt-10 p-4 border-t border-gray-300">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        <p>&copy; 2025 healthdoor. All Rights Reserved.</p>
        <p>면책 조항: 본 사이트의 정보는 참고용이며, 의학적 조언을 대체할 수 없습니다.</p>
      </div>
    </footer>
  );
}