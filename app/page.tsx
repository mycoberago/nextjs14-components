import Link from "next/link";

export default function Home() {
  return (
    <div
      className="pt-[10vh] flex flex-col"
    >
      <h1 className="text-center text-xl mb-6">NextJS 14</h1>
      <h2 className="text-center text-3xl mb-6">Server & Client Components</h2>
      <Link 
        className='text-center'
        href='/countries-server'
      >
        <button
          className="bg-white px-4 py-1 rounded-md text-black mb-3"
        >
          Server Component Demo
        </button>
      </Link>

      <Link 
        className='text-center'
        href='/countries-client'
      >
        <button
          className="bg-white px-4 py-1 rounded-md text-black"
        >
          Route Handling Demo
        </button>
      </Link>
      
    </div>
  );
}
