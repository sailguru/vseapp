import Image from 'next/image'
import { Loader } from '@/app/components/misc/loader/loader'

import '../../styles/scss/components/misc/loading.scss'

export default function Loading() {
  return <div className="loading_container"><div className="spinner"></div></div>
}