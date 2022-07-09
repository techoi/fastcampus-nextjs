import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div>내용을 찾을 수 없습니다.(URL을 확인해주세요)</div>
      <Link href="/">
        <a>홈으로</a>
      </Link>
    </>
  )
}
