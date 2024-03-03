import Check from "@mui/icons-material/Check";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import IconButton from "@mui/joy/IconButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Textarea from "@mui/joy/Textarea";
import { ChangeEvent, FC, useState } from "react";

interface TextareaCommentProps {
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  content: string;
}

const TextareaComment: FC<TextareaCommentProps> = ({
  handleChange,
  content,
}) => {
  const [italic, setItalic] = useState(false);
  const [fontWeight, setFontWeight] = useState("normal");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <FormControl>
      <Textarea
        onChange={handleChange}
        value={content}
        name="content"
        placeholder="Type something here…"
        minRows={3}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <IconButton
              variant="plain"
              color="neutral"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="medium" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              size="sm"
              placement="bottom-start"
              sx={{ "--ListItemDecorator-size": "24px" }}
            >
              {["200", "normal", "bold"].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="small" />}
                  </ListItemDecorator>
                  {weight === "200" ? "lighter" : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? "soft" : "plain"}
              color={italic ? "primary" : "neutral"}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? "italic" : "initial",
        }}
      />
    </FormControl>
  );
};

export default TextareaComment;
