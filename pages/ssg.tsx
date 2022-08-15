// 型のために導入
import { NextPage } from 'next';
// Next.jsの組み込みのコンポーネント
import Head from 'next/head';

// ページコンポーネントのpropsの型定義(ここでは空)
type SSGProps = {};

// SSG向けのページを実装
// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示する
const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページは性的サイト生成(SSG)で出ている</p>
      </main>
    </div>
  );
};

// ページコンポーネントのエクスポート方法はこれ
export default SSG;
