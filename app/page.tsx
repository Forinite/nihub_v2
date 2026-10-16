import HomePage from "./(public)/home/page";

export const revalidate = 60

export default function Home() {
  return (
    <main className="">
      <HomePage />
    </main>
  );
}
