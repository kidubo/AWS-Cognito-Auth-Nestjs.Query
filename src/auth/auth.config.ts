import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfiguration {
  public userPoolId = 'us-west-1_ygK52qPlB';
  public clientId = '1373iegqs0ibc41hjif6boddis';
  public region = 'us-west-1';
  public authority =
    'https://cognito-idp.us-west-1.amazon.com/us-west-1_ygK52qPlB';
}
