import Link from "next/link"


export default function Client() {
  return (
    <div>
      <h1>Client page</h1>
      <Link href={'/'}>Main</Link> <br/>
      <Link href={'/client/123'}>Client 123</Link>
    </div>
  )
}
