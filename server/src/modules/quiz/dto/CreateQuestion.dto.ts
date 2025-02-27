import { IsNotEmpty, Length } from 'class-validator';
export class CreateQuestionDto {
  constructor() {}

  @IsNotEmpty({ message: 'Question is required' })
  @Length(3, 50, { message: 'Question should be 3-5 characters long' })
  question: string;

  @IsNotEmpty()
  quizId: number;
}
