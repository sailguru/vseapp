import Image from 'next/image'
import { Loader } from '../components/misc/loader/loader.tsx';

export default function Home() {
  let currentYear:number = new Date().getFullYear();

  return (
    <main className="flex min-h-screen">
      { process.version.match(/^v(\d+\.\d+)/)[1] }
    </main>
  )
}
