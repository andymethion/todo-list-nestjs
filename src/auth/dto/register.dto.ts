import { IsStrongPassword, Matches } from 'class-validator';

export class RegisterDto {
  @Matches(/^[\w.]{3,16}$/)
  username: string;

  @IsStrongPassword()
  password: string;
}
