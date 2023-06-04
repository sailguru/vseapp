import {useTranslations} from 'next-intl';

export default function Home(){
  const { t } = useTranslations()
  let currentYear: number = new Date().getFullYear();

  return (
    <main className="">

    </main>
  )
}