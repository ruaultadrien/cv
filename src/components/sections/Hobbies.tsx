import { Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Hobbies() {
  return (
    <section>
      <SectionTitle title="Hobbies" />
      <Typography sx={{ ml: 1, mr: 1 }}>
        I enjoy cycling a lot, whether it be for daily commute or for traveling.
        I also enjoy mountain activities like hiking and skiing, I the joined
        Swiss Alpine Club a few years ago to learn more and share these
        activities people. I also actively contribute as member of an
        association that distributes local organic vegetables in Lausanne:{" "}
        <a
          href="https://lejardinpotager.ch"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "gray" }}
        >
          Le Jardin Potager
        </a>
        .
      </Typography>
    </section>
  );
}
