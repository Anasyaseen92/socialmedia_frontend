import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      {/* ✅ Your provided image */}
      <Box>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1J2frwz9h-cjie3MRCnOi4zyH36KPX3ytw&s"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
      </Box>

      <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikaCosmetics.com</Typography>
      </FlexBetween>

      <Typography color={medium} m="0.75rem 0">
        Your pathway to stunning and immaculate beauty. 
        Make sure your skin is exfoliated and glowing like light.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
