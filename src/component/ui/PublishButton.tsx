import { Publish } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

export default function ButtonIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "flex-end",
      }}
    >
      <Button type="submit" startDecorator={<Publish />}>
        Publish
      </Button>
    </Box>
  );
}
