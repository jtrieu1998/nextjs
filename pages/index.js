import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.text}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="checkSplit" text="Check Split App"/>
        <PostLink id="link-placeholder" text="link-placeholder"/>
        <PostLink id="link-placeholder" text="link-placeholder"/>
      </ul>
    </Layout>
  );
}