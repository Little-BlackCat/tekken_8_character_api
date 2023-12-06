import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tekken_8_character_details {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  full_name: string;

  @Column({ length: 25, nullable: true })
  gender: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  'height(cm)': number;

  @Column({ nullable: true })
  'weight(kg)': number;

  @Column({ length: 50, nullable: true })
  region: string;

  @Column({ length: 255})
  image_link: string;

  @Column()
  revealed_date: Date; 
}