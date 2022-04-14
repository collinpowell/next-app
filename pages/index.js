import { server } from '../config/index';
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

/*
fetching data
1. getStaticProps :allows us to fetch at build time
2. getServerSideProps : fetch data one every request which is a little slower
3. getStaticPaths: to dynamically generate paths based on the data we are fetching

*/


// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }

// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles/`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }

}
