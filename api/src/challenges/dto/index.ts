import { IsAlphanumeric, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  title: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  slug: string;

  @IsNotEmpty()
  @IsEnum(['easy', 'medium', 'hard'])
  difficulty: 'easy' | 'medium' | 'hard';

  @IsNotEmpty()
  @IsString()
  instructions: string;

  @IsNotEmpty()
  @IsString()
  testCases: string;

  @IsNotEmpty()
  @IsString()
  expectedResults: string;

  @IsNotEmpty()
  @IsString()
  starterCode: string;

  @IsNotEmpty()
  @IsString()
  validator: string;
}

export class UpdateChallengeDto extends PartialType(CreateChallengeDto) {}
