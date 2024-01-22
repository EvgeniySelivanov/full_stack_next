import Link from 'next/link';
import { AuthProvider } from './AuthContext';
import Button from './components/UI/Button';
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <AuthProvider>
      <div className='container'>
       
        <h1>Main page </h1>
        {posts.map((el) => (
          <div key={el.id} className="post">
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <Link href={`/post/` + el.id}>More...</Link>
          </div>
        ))}
      </div>
    </AuthProvider>
  );
}
