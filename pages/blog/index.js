import axios from 'axios';
import PropTypes from 'prop-types';
import Link from 'next/link';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const posts = result.data;

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

Blog.propTypes = {
  posts: PropTypes.array,
};

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map(item => (
        <li key={item.id}>
          <Link href={`/blog/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Blog;
