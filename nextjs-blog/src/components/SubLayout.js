import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <div>
      <h1>
        <Link href="/">
          <a>Home 으로</a>
        </Link>
      </h1>
      {children}
    </div>
  )
}
