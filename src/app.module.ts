import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'mysqldb',
      port: Number(process.env.MYSQLDB_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'senha_root_123',
      database: process.env.DATABASE_NAME || 'wefit',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    
  ],
})
export class AppModule {}
