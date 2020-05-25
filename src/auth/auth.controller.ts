import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() authCredetialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authCredetialsDto);
    }

    @Post('/signin')
    signIn(@Body() authCredetialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.singIn(authCredetialsDto);
    }

}
