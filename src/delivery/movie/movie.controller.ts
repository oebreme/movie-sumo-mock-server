import { Controller, Get, Param } from "@nestjs/common";
import { Movie } from "../../api/model/movie";
import { fakerEN as faker } from '@faker-js/faker';

@Controller("/api/v3/movies")
export class MovieController {

  @Get('/:movieId')
  getMovieById(@Param() movieId: number): Movie {
    return {
      movieId: null,
      externalId: faker.number.int(movieId),
      title: faker.commerce.productName(),
      posterImageUrl: faker.image.urlPicsumPhotos({width: 500}),
      genres: [
        faker.music.genre(),
        faker.music.genre(),
        faker.music.genre()
      ],
      details: {
        overview: faker.lorem.words({min: 12, max: 80}),
        runtime: faker.number.int({min: 23, max: 300}),
        releaseDate: faker.date.past().toDateString(),
        availableOn: {
          providers: []
        },
        ratingAverage: faker.number.float({min: 0, max: 1}),
        ratingVoteCount: faker.number.int({min: 5, max: 9000})
      }
    }
  }

}