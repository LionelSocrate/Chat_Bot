import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsEmail, IsString } from 'class-validator';

export class CreateDemandeDto {
  @ApiProperty({
    example: '2026-04-22T10:00:00.000Z',
    description: 'Date de la demande',
  })
  @IsDateString()
  dateD!: string;

  @ApiProperty({
    example: true,
    description: 'Statut de validation de la demande',
  })
  @IsBoolean()
  validation!: boolean;

  @ApiProperty({
    example: 'Zone A',
    description: 'Zone concernée',
  })
  @IsString()
  zone!: string;

  @ApiProperty({
    example: '2026-04-25T15:00:00.000Z',
    description: 'Date de placement prévue',
  })
  @IsDateString()
  datePlacement!: string;

  @ApiProperty({
    example: 'client@gmail.com',
    description: 'Email du client',
  })
  @IsEmail()
  clientEmail!: string;

  @ApiProperty({
    example: 'admin@gmail.com',
    description: "Email de l'admin",
  })
  @IsEmail()
  adminEmail!: string;
}