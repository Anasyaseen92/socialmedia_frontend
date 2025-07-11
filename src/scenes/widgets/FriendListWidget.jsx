import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { setFriends } from "state";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const FriendListWidget = ({ userId }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}/friends`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          const text = await response.text();
          console.error("Error response from server:", text);
          throw new Error("Failed to fetch friends");
        }

        const data = await response.json();
        dispatch(setFriends({ friends: data }));
      } catch (err) {
        console.error("getFriends error:", err.message);
      }
    };

    getFriends(); // 👈 call the function inside useEffect
  }, [userId, token, dispatch]); // ✅ include proper dependencies

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {Array.isArray(friends) &&
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName || "First"} ${friend.lastName || "Last"}`}
              subtitle={friend.occupation || "No occupation"}
              userPicturePath={friend.picturePath || "https://via.placeholder.com/60"}
            />
          ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
