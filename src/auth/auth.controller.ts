import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  //POST auth/signup
  @Post('signup')
  signup() {
    return this.authService.signup();

  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

}
