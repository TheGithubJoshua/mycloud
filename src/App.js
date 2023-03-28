import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function visitnextcloud() {
  window.open("http://localhost:8081");
  return;
}

export default function App() {
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md"
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome, Choose An App</b>
            </Typography>
            <Typography level="body2"></Typography>
          </div>
          <Button sx={{ mt: 1 /* margin top */ }} onClick={visitnextcloud}>
            Nextcloud
          </Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
