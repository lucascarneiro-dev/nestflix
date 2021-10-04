import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { GenreModule } from './genre/genre.module';
import { ParticipantsModule } from './participants/participants.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MoviesModule, GenreModule, ParticipantsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
