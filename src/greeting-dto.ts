import { Transform } from 'class-transformer';
import { IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class GreetingDto {
  @IsNumberString()
  id: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => Number(value))
  age?: number;
}
