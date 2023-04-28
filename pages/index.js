import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/index/Hero'
import HeadlineCard from '@/components/index/HeadlineCard'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Hero/>
      <HeadlineCard/>
    </div>
  )
}
