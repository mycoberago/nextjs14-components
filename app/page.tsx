import Link from "next/link";

export default function Home() {
  return (
    <div
      className="pt-[10vh] flex flex-col"
    >
      <h1 className="text-center text-xl mb-6">NextJS 14</h1>
      <h2 className="text-center text-3xl mb-6">Server Components</h2>
      <Link 
        className='text-center'
        href='/countries-server'
      >
        <button
          className="bg-white px-4 py-1 rounded-md text-black"
        >
          Get Started
        </button>
      </Link>
      
    </div>
  );
}
