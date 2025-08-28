import { Link, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Hobbies() {
  return (
    <section>
      <SectionTitle title="Hobbies" />
      <Typography sx={{ ml: 1, mr: 1 }}>
        I enjoy cycling, both for daily commuting and for travel. I also enjoy
        mountain activities such as hiking and skiing. A few years ago, I joined
        the Swiss Alpine Club to learn more and share these activities with
        others. Additionally, I also volunteer for an association in Lausanne
        which distributes local organic vegetables (
        <Link sx={{ color: "gray" }} href="https://lejardinpotager.ch">
          Le Jardin Potager
        </Link>
        ).
      </Typography>
      .
    </section>
  );
}
