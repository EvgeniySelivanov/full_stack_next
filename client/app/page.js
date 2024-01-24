import Link from 'next/link';
import Test from './components/test/Test.tsx';
import Button from './components/UI/Button';
async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}
async function fetchUser() {
  const res = await fetch('http://localhost:5000/api/users');
  const result = await res.json();
  return result;
}
export default async function Home() {
  const posts = await fetchData();
  const {data} = await fetchUser();
  return (
    <div>
  
        <div className="container">
      
          <h1>Main page </h1>
          <div>
            <div style={{display:'flex',marginRight:'20px'}}>
              <div style={{marginRight:'80px'}}>
                <h2>Authorized user:</h2>
                <Test/>
              </div>
              <div>
                <h2>Users in DB:</h2>
                {data.map((el, i) => (
                  <div key={i}>
                    <span>{i+1}th</span>
                    <p>First Name: {el.first_name}</p>
                    <p>Last Name:{el.last_name}</p>
                    <p>Email: {el.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
          {/* {posts.map((el) => (
            <div key={el.id} className="post">
              <h2>{el.title}</h2>
              <p>{el.body}</p>
              <Link href={`/post/` + el.id}>More...</Link>
            </div>
          ))} */}
        </div>
    </div>
  );
}
