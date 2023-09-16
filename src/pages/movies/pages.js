

'use client'

import React, { Suspense } from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import styles from "./movies.module.css"
import Image from "next/image";
import Link from "next/link";


const apiKey = process.env.NEXT_PUBLIC_API_KEY;
// const url2 =  'https://api.themoviedb.org/3/movie/top_rated'

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

export default function TopRatedMovies() {

  const [movies, setMovieDB] = useState([]);

  useEffect(() => {
    async function getTenRatedMovies() {
      try {
        const response = await axios.get(url);
        const movies = response.data.results.slice(0, 10);
        console.log(response.data.results);
        setMovieDB(movies);
      } catch (error) {
      //  console.log(throw new Error(""));
        console.error("Error:",error);
      }
    }

    getTenRatedMovies();
  }, []);

  if(!movies) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={styles.movies_main_container}>
      <div className={styles.featuredAndSeeMore}>
        <h4>Featured Movies</h4>
        <div>
          <span>See More</span>
          <Image
            src={"/Chevron right.svg"}
            alt="Chevron right"
            height={20}
            width={20}
          />
        </div>
      </div>

      <div className={styles.movies_wrapper}>
        <Suspense fallback ={<h1>Loading...</h1>}>
        {movies.map((movie, index) => {
          return (
            <Link
              href={`movies/${movie.id}`}
              className={styles["no_text_decoration"]}
            >
              <div
                // keys={index}
                data-testid="movie-card"
                className={styles["movie-card"]}
                keys={movie.id}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  width={100}
                  height={370}
                  alt="poster image"
                  className={styles["movie-poster"]}
                  data-testid="movie-poster"
                  // loader="lazy"
                />

                <p
                  data-testid="movie-release-date"
                  className={styles["movie-release-date"]}
                >
                  {movie.release_date}
                </p>

                <h4 data-testid="movie-title" className={styles["movie-title"]}>
                  {movie.title}
                </h4>
              </div>
            </Link>
          );
        })}
        </Suspense>
      </div>

    </section>
  );
}
