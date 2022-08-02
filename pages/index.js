import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/Logo';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Categories from '../components/home/categories';
import Features from '../components/home/Features';
import Footer from '../components/footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title>سایت رسمی تاناکورای سنندج</title>
        <meta charset="UTF-8" />
        <meta name="description" content="سایت تاناکورای سنندج یک بازار برای خرید و فروش محصولات مختلف و برندهای معروف دنیا می‌باشد. هر آنچه در بازار تاناکورای سنندج باشد در این سایت نیز پیدا خواهد شد." />
        <meta name="keywords" content="تاناکورای سنندج, شلوار, کفش, عینک, لباس زنانه, تی شرت و پیراهن, آرایشی بهداشتی" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Logo />
      <Navbar />
      <Slider />
      <Categories />
      <Features />
      <Footer />
    </div>
  )
}
