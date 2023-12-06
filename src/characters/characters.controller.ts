import { Controller, Get, Param, Body, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Tekken_8_character_details } from './entity/characters.entity';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get() // GET /characters?name=
  /**
   * The function `findCharacters` is an asynchronous function that takes in a query parameter `name` and
   * a body parameter `characterName`, and returns a promise that resolves to an array of Tekken 8
   * character details based on the provided parameters.
   * @param {string} name - The `name` parameter is a query parameter that is passed in the URL. It is a
   * string that represents the name of a character.
   * @param body - The `body` parameter is an object that contains a property called `characterName`.
   * This property is of type string and is used to specify the name of a character.
   * @returns a Promise that resolves to an array of objects of type "Tekken_8_character_details".
   */
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
  /**
   * The function "findCharacter" is an asynchronous function that takes in an "id" parameter and returns
   * a promise that resolves to a "Tekken_8_character_details" object.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
   * Tekken 8 character.
   * @returns The `findCharacter` method is returning a promise that resolves to an object of type
   * `Tekken_8_character_details`.
   */
  async findCharacter(@Param('id') id: number): Promise<Tekken_8_character_details> {
    return await this.charactersService.findOne(id);
  }

}
