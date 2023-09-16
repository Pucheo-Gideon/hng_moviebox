// 'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../movie.module.css";
import Link from "next/link";

export default function Movie() {
  const router = useRouter();
  const { movie_id } = router.query;

  const [movie, setMovie] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const movieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await axios.get(movieUrl);
        console.log(response.data);
        setMovie(response.data);
      } catch (e) {
        console.error("Error:", e);
      }
    }

    if (movie_id) {
      getMovie();
    }
  }, [movie_id]);

  if (!movie) {
    return <h1>Loading....</h1>;
  }

  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <section
        data-testid="movie-container"
        className={styles["movie-container"]}
      >
        <div data-testid="sidebar" className={styles["sidebar"]}>
          {/* Logo and movieBox */}
          <div
            data-testid="logo_text-wrapper"
            className={styles["logo_text-wrapper"]}
          >
            <Image src={"/tv.svg"} width={50} height={50} alt="logo" />
            <h3 data-testid="logo_text" className={styles["logo_text"]}>
              MovieBox
            </h3>
          </div>

          {/* To Home */}
          <div data-testid="routes_wrapper" className={styles["route_wrapper"]}>
            <Link href={"/"} className={styles["no_text_decoration"]}>
              <div data-testid="class" className={styles["class"]}>
                <Image src={"/Home.svg"} width={30} height={30}  alt="home icon"/>
                <h3>Home</h3>
              </div>
            </Link>

            <div data-testid="class" className={styles["class"]}>
              <Image src={"/Movie Projector.svg"} width={30} height={30} alt="movie projector icon" />
              <h3>Movies</h3>
            </div>

            <div data-testid="class" className={styles["class"]}>
              <Image src={"/TV Show.svg"} width={30} height={30} alt="tv show icon" />
              <h3>TV Series</h3>
            </div>

            <div data-testid="class" className={styles["class"]}>
              <Image src={"/Calendar.svg"} width={30} height={30} alt="calender icon"/>
              <h3>Upcoming</h3>
            </div>
          </div>

          <div data-testid="rectangle" className={styles["rectangle"]}>
            <p data-testid="play_movie" className={styles["play_movie"]}>
              Play movie quizes and earn free tickets
            </p>
            <p data-testid="playing" className={styles["playing"]}>
              50k people are playing now
            </p>
            <button>start playing</button>
          </div>

          <div data-testid="class" className={styles["class"]}>
            <Image src={"/Logout.svg"} width={30} height={30} alt="logout icon"/>
            <h3>Log out</h3>
          </div>
        </div>

        <div
          data_testid="movie_info_wrapper"
          className={styles["movie_info_wrapper"]}
          keys={movie.id}
        >
          <Suspense fallback={<h1>Loading....</h1>}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie poster"
              width={700}
              height={500}
              data_testid="poster"
              className={styles["poster"]}
            />
          </Suspense>

          <div
            data-testid="movie-details-wrapper"
            className={styles["movie-details-wrapper"]}
          >
            <div data-testid="box1_right" className={styles["box1_right"]}>
              <div data-testid="movie-brief" className={styles["movie-brief"]}>
                <span
                  data-testid="movie-title"
                  className={styles["movie_title"]}
                >
                  {movie.title}
                </span>
                <h3 data-testid="dot" className={styles["dot"]}>
                  .
                </h3>
                <span
                  data-testid="movie-release-date"
                  className={styles["movie-release-date"]}
                >
                  {new Date(movie.release_date).getUTCFullYear()}
                </span>

                <h3 data-testid="dot" className={styles["dot"]}>
                  .
                </h3>

                <span
                  data-testid="movie-runtime"
                  className={styles["movie-runtime"]}
                >
                  {movie.runtime}min
                </span>
                <span data_testid="action" className={styles["action"]}>
                  <p>Action</p>
                </span>
                <span
                  data-testid="movie-genre"
                  className={styles["movie-genre"]}
                >
                  <p>{movie.genres[0].name}</p>
                </span>
              </div>

              <p
                data_testid="movie_overview"
                className={styles["movie-overview"]}
              >
                {movie.overview}
              </p>

              <div data_testid="movie_team" className={styles["movie_team"]}>
                <div>
                  Director: <span>Joseph Kosinski</span>{" "}
                </div>
                <div>
                  Writers: <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </div>
                <div>
                  Stars:
                  <span>Tom Cruise, Jennifer Connelly , Miles Teller</span>
                </div>
              </div>

              <div data-testid="top_rated" className={styles["top_rated"]}>
                <div
                  data-testid="top_rated_movie"
                  className={styles["top_rated_movie"]}
                >
                  <span>Top rated movie #65</span>
                </div>
                <div data_testid="award" className={styles["award"]}>
                  <span>Awards 9 nominations</span>
                </div>
                <Image
                  src={"/Expand Arrow.png"}
                  width={30}
                  height={30}
                  data_testid="expand_arrow"
                  className={styles["expand_arrow"]}
                  alt="expand arrow icon"
                />
              </div>
            </div>

            <div data-testid="box2_left" className={styles["box2_left"]}>
              <div data-testid="movie-votes" className={styles["movie-votes"]}>
                <div data-testid="star-vote" className={styles["star-vote"]}>
                  <Image src="/StarMovie.svg" width={20} height={20} alt="star icon"/>
                  <span>{movie.vote_average.toFixed(1)}</span>
                    <div data_testid="stroke" className={styles['stroke']}>|</div>
                </div>
                <span>{movie.vote_count}k</span>
              </div>

              <div data_testid="show_times" className={styles["show_times"]}>
                <Image
                  src={"/Two Tickets.svg"}
                  alt="tickets"
                  width={25}
                  height={25}
                />
              <p>See Show times</p>
              </div>
              <div data_testid="more" className={styles["more"]}>
                <Image
                  src={"/List.svg"}
                  alt="tickets"
                  width={25}
                  height={25}
          
                />
              <p>More watch options</p>
              </div>
              <Image src={'/Rectangle 37.svg' } alt="rectangle icon"data_testid="three_image" className={styles['three_image']} width={360} height={230}/>
            </div>

          </div>
        </div>
      </section>
    </Suspense>
  );
}
