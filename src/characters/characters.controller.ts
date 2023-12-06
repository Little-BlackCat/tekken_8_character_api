import { Controller, Get, Param, Body, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Tekken_8_character_details } from './entity/characters.entity';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Characters')
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  // GET /characters?search={ }
  @Get() 
  @ApiOperation({
    summary: 'Find characters based on name',
    description: 'Retrieve Tekken 8 character details based on the provided parameters.',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'The search parameter is used to search the name of a character.',
    example: 'Jin Kazama',
  })
  async findAllCharacters(
    @Query('search') search?: string,
  ): Promise<Tekken_8_character_details[]> {

    return await this.charactersService.findAll(search); 
  }

  // GET /characters/{id}
  @Get(':id') 
  @ApiOperation({
    summary: 'Find a character by ID',
    description: 'Retrieve a Tekken 8 character detail based on the provided ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of a Tekken 8 character.',
  })
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
