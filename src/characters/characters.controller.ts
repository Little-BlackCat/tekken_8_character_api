import { Controller, Get, Param, Body, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Tekken_8_character_details } from './entity/characters.entity';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get() // GET /characters?name=
  async findCharacters(
    @Query('name') name: string,
    @Body() body: { characterName: string 
  }): Promise<Tekken_8_character_details[]> {

    if(name) {
      return await this.charactersService.findCharacterByName(name);
    } else {

      const { characterName } = body;
      return await this.charactersService.findAll(characterName); 
    }

  }

  @Get(':id') // GET /characters/0
  async findCharacter(@Param('id') id: number): Promise<Tekken_8_character_details> {
    return await this.charactersService.findOne(id);
  }

}
