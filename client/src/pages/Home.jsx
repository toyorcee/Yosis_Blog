import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog!</h1>
        <h2 className="text-3xl font-bold lg:text-3xl">
          Explore Tech, Music, Sports & Life
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm">
          Dive into a world of tech insights, hands-on projects, tutorials, and
          inspiring stories. Whether you're passionate about coding, curious
          about the latest tech trends, or just looking to enjoy some great
          music and social topics, this blog has something for everyone. Join
          the journey and fuel your curiosity!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-2 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
