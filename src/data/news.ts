// src/data/news.ts 파일 내용

// 뉴스 기사 하나의 형태(타입)를 정의합니다. TypeScript에서 유용합니다.
export type Article = {
  id: string; // 기사 번호 (고유 식별자)
  title: string; // 기사 제목
  summary: string; // 기사 요약
  category: 'health' | 'medicine' | 'column'; // 카테고리
  content: string; // 기사 본문
};

// 실제 뉴스 데이터 배열
export const newsData: Article[] = [
  {
    id: '101',
    title: '비타민 D, 겨울철 면역력 지키는 핵심',
    summary: '연구 결과, 비타민 D 수치가 낮은 사람은 면역력이 약해질 가능성이 높습니다.',
    category: 'health',
    content: `안녕하십니까. 101번 기사입니다. 비타민 D는 햇빛을 통해 얻을 수 있지만, 겨울철에는 부족하기 쉽습니다. ... (중략) ... 면역력을 지키기 위한 비타민 D 섭취 가이드라인을 확인하세요.`,
  },
  {
    id: '202',
    title: '전문가들이 말하는 수면의 질 높이는 법 5가지',
    summary: '잠들기 전 스마트폰 사용을 자제하고, 정해진 시간에 잠자리에 드는 습관이 중요합니다.',
    category: 'health',
    content: `안녕하십니까. 202번 기사입니다. 수면의 질은 건강과 직결됩니다. 수면 환경을 어둡게 하고, 자기 전 카페인 섭취를 피하는 등 전문가들의 꿀팁 5가지를 공개합니다.`,
  },
  {
    id: '303',
    title: '최신 의료 기술: 인공지능 진단 시대 개막',
    summary: 'AI가 판독하는 X-ray와 MRI, 정확도는 이미 전문의 수준에 육박하고 있습니다.',
    category: 'medicine',
    content: `안녕하십니까. 303번 기사입니다. 인공지능이 의료 현장에 도입되면서 진단 시간이 획기적으로 단축되고, 오진율이 낮아지고 있습니다.`,
  },
];

// 이 함수를 사용하면 특정 ID의 기사를 쉽게 찾을 수 있습니다.
export function getArticleById(id: string) {
  return newsData.find(article => article.id === id);
}