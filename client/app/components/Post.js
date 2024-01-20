import Link from 'next/link';
const Post = ({post}) => {
  return (
    <div>
      <Link href={'/'}>back to home...</Link>
      <h2>{post.title.toUpperCase()}</h2>
      <p>{post.body}</p>
      <strong>Author ID:{post.id}</strong>
    </div>
  );
};

export default Post;
