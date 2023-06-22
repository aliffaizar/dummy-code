import { PartialType } from '@nestjs/mapped-types'
import { IsNumber, IsString } from 'class-validator'

export class CreateChallengeLanguageDto {
  @IsString()
  language: string

  @IsString()
  testCases: string

  @IsString()
  expectedResults: string

  @IsString()
  starterCode: string

  @IsString()
  validator: string

  @IsNumber()
  challengeId: number
}

export class UpdateChallengeLanguageDto extends PartialType(
  CreateChallengeLanguageDto,
) {}
