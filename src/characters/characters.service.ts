import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tekken_8_character_details } from './entity/characters.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class CharactersService {
  /**
   * The constructor function injects the charactersRepository dependency into the class.
   * @param charactersRepository - The charactersRepository parameter is an instance of the Repository
   * class from the TypeORM library. It is used to interact with the database and perform CRUD operations
   * (create, read, update, delete) on the Tekken_8_character_details table. The @InjectRepository
   * decorator is used to inject the repository instance
   */
  constructor(
    @InjectRepository(Tekken_8_character_details)
    private readonly charactersRepository: Repository<Tekken_8_character_details>,
  ) {}

  /**
   * The `findOne` function is an asynchronous function that tries to find a character by its ID and
   * returns it, but throws a `NotFoundException` if an error occurs.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * character you want to find.
   * @returns The `findOne` method is returning the result of the `findOneBy` method call on the
   * `charactersRepository`.
   */
  async findOne(id: number) {

    try {
      return await this.charactersRepository.findOneBy({ id });
      
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error)
    }
  }

  /**
   * The `findAll` function is an asynchronous function that retrieves all characters from a repository,
   * optionally filtered by character name, and returns the result or throws a `NotFoundException` if no
   * characters are found.
   * @param {string} [characterName] - The `characterName` parameter is an optional string that
   * represents the name of a character. If provided, the function will search for characters whose full
   * name contains the specified value. If not provided, the function will return all characters.
   * @returns a Promise that resolves to an array of character objects.
   */
  async findAll(search: string) {

    try {
      console.log(search)
      if(search) {
        const result = await this.charactersRepository.find({
          where: {
            full_name: ILike(`%${search}%`), // ใช้ ILike แทน Like เพื่อทำให้เป็น case-insensitive
          }
        })
  
        if(result.length !== 0) {
          return result
        } else {
          throw new NotFoundException(`Cannot find character name: ${search}`);
        }
      }
      return await this.charactersRepository.find();

    } catch (error) {

      console.error(error)
      throw new NotFoundException(error);
    }

  }

}
