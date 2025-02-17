import { Module } from '@nestjs/common';
import { UserModule } from '../users/users.module';
import { BffController } from './bff.controller';

@Module({
  imports: [UserModule],
  controllers: [BffController],
})
export class BffModule {}
