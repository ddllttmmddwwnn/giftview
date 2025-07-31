import CardBox from '@/components/CardBox';

export default function HomePage() {
  return (
    <main className="p-8">
      <CardBox variant="default">
        <h1 className="text-xl font-bold">기프트카드 전시</h1>
        <p>이곳은 메인 페이지입니다.</p>
      </CardBox>
    </main>
  );
}