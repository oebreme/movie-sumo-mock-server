import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MovieController} from "./delivery/movie/movie.controller";

@Module({
  imports: [],
  controllers: [
    AppController,
    MovieController
  ],
  providers: [AppService],
})
export class AppModule {}
