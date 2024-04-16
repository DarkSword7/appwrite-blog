import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import AppwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    AppwriteService.getPosts([]).then(
      (posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      },
      [posts]
    );
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap text-black">
          {posts.map((post) => (
            <div key={post.$id} className="">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
