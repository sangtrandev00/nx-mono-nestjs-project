import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-openidconnect';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
    constructor() {
        super({
            issuer: 'http://localhost:8080/realms/myrealm',
            authorizationURL: 'http://localhost:8080/realms/myrealm/protocol/openid-connect/auth',
            tokenURL: 'http://localhost:8080/realms/myrealm/protocol/openid-connect/token',
            userInfoURL: 'http://localhost:8080/realms/myrealm/protocol/openid-connect/userinfo',
            clientID: 'nestjs-app',
            clientSecret: 'admin',
            callbackURL: 'http://localhost:3000/auth/callback',
            scope: ['openid', 'profile', 'email'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any) {
        return { accessToken, profile };
    }
}
