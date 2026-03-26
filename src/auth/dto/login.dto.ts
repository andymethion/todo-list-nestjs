import { IsNotEmpty, Matches } from 'class-validator';

export class LoginDto {
  @Matches(/^[\w.]{3,16}$/)
  username: string;

  @IsNotEmpty()
  password: string;
}
