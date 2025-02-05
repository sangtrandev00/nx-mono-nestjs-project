import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @Get('login')
    @UseGuards(AuthGuard('keycloak'))
    async login() {
        return { message: 'Redirecting to Keycloak login...' };
    }

    @Get('callback')
    @UseGuards(AuthGuard('keycloak'))
    async callback(@Req() req) {
        return { user: req.user };
    }

    @Get('logout')
    @UseGuards(AuthGuard('keycloak'))
    async logout(@Req() req) {
        req.logout();
        return { message: 'Logged out successfully' };
    }
}   