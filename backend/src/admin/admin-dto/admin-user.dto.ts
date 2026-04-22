import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    example: 'bernad@gmail.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  nom!: string;

  @ApiProperty({
    example: '555-1234',
    description: 'The phone number of the user',
  })
  @IsString()
  tel!: string;

  @ApiProperty({
    example: 'Fianarantsoa',
    description: 'The agence of the user',
  })
  @IsString()
  agence!: string;
}
