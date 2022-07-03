import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <p>Page 1</p>

      <Link href="/page2">
        <a className="App-link">Next Page</a>
      </Link>
    </Layout>
  );
}
