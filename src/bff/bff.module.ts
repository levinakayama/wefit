import { Module } from '@nestjs/common';
import { BffController } from './bff.controller';
import { CompanyModule } from '../company/company.module';

@Module({
  imports: [CompanyModule],
  controllers: [BffController],
})
export class BffModule {}
