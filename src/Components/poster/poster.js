import SearchBar from "../searchbar/searchbar";
import styles from "./poster.module.css";
import Image from "next/image";

import { DM_Sans } from "next/font/google";

const dm_Sans = DM_Sans({ subsets: ["latin"] });

export default function Poster() {
  return (
    <section className={styles.poster_cover}>
      <SearchBar />

      <div className={styles.movie_details_wrapper}>
        <div className={styles.johnWick}>
          <p>John Wick 3: Parabellum</p>
        </div>

        <div className={styles.ratings}>
          <div>
            <Image
              src={"/imdb.svg"}
              alt="imdb_logo"
              height={17}
              width={35}
              className={styles.imdb}
            />
            <span>860/100</span>
          </div>

          <div>
            <Image src={"/apple.svg"} height={17} width={35} alt="apple" />
            <span>97%</span>
          </div>
        </div>

        <div className={styles.movie_summary_wrapper}>
          <p>
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>
        </div>

        <div className={styles.play_btn}>
          <Image src={"/playIcon.svg"} alt="play icon" height={20} width={20} />
          <span>Watch trailer</span>
        </div>
      </div>
    </section>
  );
}
