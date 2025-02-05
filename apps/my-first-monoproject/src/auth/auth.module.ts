import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { KeycloakStrategy } from './keycloak.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'keycloak' })],
  providers: [KeycloakStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule { }
