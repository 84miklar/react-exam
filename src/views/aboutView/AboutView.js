import React from "react";
import "./AboutView.css";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/cards/Card";
export const AboutView = () => {
  const tmdb = "https://www.themoviedb.org/";
  return (
    <div className="about__container">
      <Card>
        <section className="paragraph__container">
          <p>
            Global movie is a movie search site made as a school assignment.{" "}
          </p>
          <p>
            The techniques used are JSX and CSS in the React framework and the
            API used to fetch all the movie data comes from{" "}
            <a
              className="tmdb__link"
              target="_blank"
              rel="noreferrer"
              href={tmdb}
            >
              the movie data base
            </a>
          </p>

          <a className="mail__to" href="mailto:mikael_larsson84@hotmail.com">
            <Button label="Contact me" />
          </a>

          <p className="copyright">
            Ⓒ Copyright by Mikael Larsson, Sweden, 2021
          </p>
        </section>
      </Card>
    </div>
  );
};
