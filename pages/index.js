import Layout from '../components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.text}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <div className="center">
      <style jsx>{`
        .center {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    <Layout >
      <Head>
        <title>Justin Home Page</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
      </Head>
      <h1>Index</h1>
      <ul>
        <PostLink id="checkSplit" text="Check Split App"/>
        <PostLink id="gallery" text="Secret"/>
        <PostLink id="link-placeholder" text="link-placeholder"/>
        <a href="/test.html">adsfasdf</a>
      </ul>
      
    </Layout>
    </div>
  );
}