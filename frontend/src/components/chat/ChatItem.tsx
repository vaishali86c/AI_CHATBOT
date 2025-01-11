import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const ChatItems = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();

  const getAvatarText = () => {
    const nameParts = auth?.user?.name?.split(" ");
    if (nameParts && nameParts.length > 1) {
        return nameParts[0][0] + nameParts[1][0]; // First letter of first and last name
    }
    // Fallback to just the first letter if there's no last name
    return nameParts ? nameParts[0][0] : "";
};


  return role == "assistant" ? (
    <Box sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d5612",
        gap: 2,
        borderRadius: 2,
        my: 1,
      }}>
      <Avatar sx={{ ml: "0"}}>
        <img src="/logos/openai.png" alt="openai" width={"30px"} />
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d56",
        gap: 2,
        borderRadius: 2,
      }}>
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }} >
      {getAvatarText()}
      </Avatar>
      <Box>
        <Typography fontSize={"20px"}>{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItems;

