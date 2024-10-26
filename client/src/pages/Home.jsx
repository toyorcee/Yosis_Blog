import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction/CallToAction";
import { useEffect, useState, useRef } from "react";
import PostCard from "../components/PostCard/PostCard";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getPosts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        toast.error("Error loading posts: " + error.message);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    // Intersection Observer to check if the posts section is in view
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerRef.current.disconnect();
        }
      });
    });

    const target = document.getElementById("posts-section");
    if (target) {
      observerRef.current.observe(target);
    }

    return () => {
      if (observerRef.current && target) {
        observerRef.current.unobserve(target);
      }
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto relative overflow-hidden">
        <h1 className="text-3xl font-bold lg:text-6xl animate-h1">
          <TypeAnimation
            sequence={[
              "Welcome to Yosi's Blog!",
              1000,
              "",
              1000,
              "Welcome to Yosi's Blog!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-3xl font-bold lg:text-3xl animate-h2">
          <TypeAnimation
            sequence={[
              "Explore Tech, Music, Sports & Life",
              1000,
              "",
              1000,
              "Explore Tech, Music, Sports & Life",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
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

      <div
        className="max-w-6xl mx-auto p-3 flex flex-col gap-2 py-7"
        id="posts-section"
      >
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto justify-center">
              {posts.map((post, index) => (
                <PostCard
                  key={post._id}
                  post={post}
                  index={index}
                  isVisible={isVisible}
                />
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
