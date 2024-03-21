import { faker } from "@faker-js/faker";

export enum Genres {
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Science Fiction',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
}

export function genRandomGenres(): string[] {
  let randomGenres: string[] = [];
  let times: number = faker.number.int({min: 1, max: 3})

  for (let i: number = 0; i < times; i++) {
    let randIndex: number = faker.number.int({min: 0, max: 18});
    let randGenre: string = Genres[randIndex];
    randomGenres.push(randGenre);
  }
  return randomGenres;
}