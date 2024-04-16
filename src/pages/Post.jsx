import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AppwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      AppwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    AppwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        AppwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="flex flex-col items-center mb-4 relative border rounded-xl p-2">
          <img
            src={AppwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-full object-cover"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6 flex">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-white"
                  textColor="text-black"
                  className="mr-3 py-1 font-mono hover:bg-black hover:text-white"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-white"
                textColor="text-black"
                className="py-1 font-mono hover:bg-black hover:text-white"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6 text-center">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="prose prose-lg text-gray-300 mx-auto">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}
