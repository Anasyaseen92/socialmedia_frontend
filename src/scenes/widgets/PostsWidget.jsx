import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = isProfile
          ? `https://socialmedia-backend-9nw8.vercel.app/posts/${userId}/posts`
          : "https://socialmedia-backend-9nw8.vercel.app/posts";

        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        dispatch(setPosts({ posts: data }));
      } catch (err) {
        console.error("❌ Error fetching posts:", err.message);
      }
    };

    fetchData();
  }, [isProfile, userId, token, dispatch]); // ✅ all required dependencies

  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            firstName,
            lastName,
            description,
            location,
            picturePath,
            userPicturePath,
            likes,
            comments,
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${firstName} ${lastName}`}
              description={description}
              location={location}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
            />
          )
        )}
    </>
  );
};

export default PostsWidget;
