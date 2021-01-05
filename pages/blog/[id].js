import PropTypes from 'prop-types';
import axios from 'axios';

export async function getStaticPaths() {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  const paths = result.data.map(item => {
    return { params: { id: String(item.id) } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  return {
    props: {
      post: result.data,
    },
  };
}

Post.propTypes = {
  post: PropTypes.object,
};

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
export default Post;
