import Link from "next/link";
import Layout from "../components/Layout";

export default function PageTwo() {
  return (
    <Layout>
      <p>Page 2</p>

      <Link href="/">
        <a className="App-link">Previous Page</a>
      </Link>
    </Layout>
  );
}
