import { Module } from '@nestjs/common';
import { CharactersModule } from './characters/characters.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tekken_8_character_details } from './characters/entity/characters.entity';
import { config } from 'dotenv';
config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +(process.env.PORT),
      username: process.env.USERNAME, 
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Tekken_8_character_details],
      // synchronize: process.env.NODE_ENV != 'production',
    }),
    CharactersModule 
  ],
})
export class AppModule {}
