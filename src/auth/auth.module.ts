import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthConfiguration } from './auth.config';
import { CognitoAuthGuard } from './cognito.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthConfiguration, JwtStrategy, CognitoAuthGuard],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
})
export class AuthModule {}
