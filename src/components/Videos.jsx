import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos) return <Loader />;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} sx={{ width: { xs: "100%", md: "auto" } }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
