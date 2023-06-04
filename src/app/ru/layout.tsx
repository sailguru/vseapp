import { Navigation } from '@/app/components/navigation/navigation';
import '../globals.scss';
import '../styles/scss/components/layout/navigation/nav.scss';
import '../styles/scss/components/layout/form/form.scss';
import { Inter } from 'next/font/google';
import { Helmet } from "react-helmet";
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { GeneralPlaceholder } from '../components/misc/placeholder/general_placeholder';
import { CategoryStrip } from '../components/navigation/category_strip/category_strip';
import 'animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.META_APPLICATION_NAME + ' - ' + process.env.META_APPLICATION_DESCRIPTION,
  description: process.env.META_APPLICATION_DESCRIPTION,
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

export default async function LocaleLayout({ children, params }) {
  const locale = useLocale();

  let messages;

  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        </head>
        <body className='container__main'>
          <div className="container__inner">
            <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
              <Navigation></Navigation>
            </Suspense>
            <Suspense fallback={<GeneralPlaceholder></GeneralPlaceholder>}>
              <CategoryStrip></CategoryStrip>
            </Suspense>
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  )
}
