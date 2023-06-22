import { IsString } from 'class-validator'

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

  @IsString()
  challengeId: number
}
