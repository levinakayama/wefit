import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { BffModule } from './bff/bff.module';

@Module({
  imports: [UserModule, BffModule],
})
export class AppModule {}
