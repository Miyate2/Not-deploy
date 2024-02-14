import { json } from "@remix-run/node";
// Linkコンポーネントをインポート
import { Link, useLoaderData } from "@remix-run/react";

// ...

export default function Posts() {
  const { posts } = useLoaderData();
	// バックエンドのデータを使う形に修正
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
