import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tekken_8_character_details } from './entity/characters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tekken_8_character_details])], // This method uses to define which repositories are registered in the current scope.
  providers: [CharactersService],
  controllers: [CharactersController],
})

export class CharactersModule {}
