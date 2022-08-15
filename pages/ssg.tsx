import { GetStaticProps, NextPage, NextPageContext } from 'next';
import Head from 'next/head';

// ページコンポーネントのpropsの型定義
type SSGProps = {
  message: string;
};

// SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>このページは性的サイト生成(SSG)で出ている</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

// getStaticPropsはビルドに実行される
// GetStaticProps<SSGProps>はSSGPropsを引数に取るgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp} にgetStaticPropsが実行されました`;
  console.log('message', message);
  return {
    // ここで返したpropsを元にページコンポーネントを描画する
    props: {
      message,
    },
  };
};

// ページコンポーネントのエクスポート方法はこれ
export default SSG;
