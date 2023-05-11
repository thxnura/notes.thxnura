import Login from '@/components/Login'
import Image from 'next/image'

import { sql } from "@vercel/postgres";


export default function Home() {
  return (
    <div className=''>

      <Login />
    </div>
  )
}
