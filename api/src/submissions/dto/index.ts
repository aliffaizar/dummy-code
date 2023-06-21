import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  @IsOptional()
  stdout: string;

  @IsString()
  @IsOptional()
  stderr: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  time: number;

  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNumber()
  @IsNotEmpty()
  languageId: number;

  @IsString()
  @IsNotEmpty()
  challengeId: string;

  @IsString()
  @IsOptional()
  userId: string;
}

export class UpdateSubmissionDto extends PartialType(CreateSubmissionDto) {}
