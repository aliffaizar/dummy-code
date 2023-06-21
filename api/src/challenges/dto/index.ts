import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsEnum(['easy', 'medium', 'hard'])
  difficulty: 'easy' | 'medium' | 'hard';

  @IsNotEmpty()
  @IsString()
  instructions: string;
}

export class UpdateChallengeDto extends PartialType(CreateChallengeDto) {}
