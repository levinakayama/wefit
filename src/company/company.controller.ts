import { Controller, Post, Body, Get } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(@Body() data: CreateCompanyDto) {
    return await this.companyService.createCompany(data);
  }

  @Get()
  async getCompanies() {
    return await this.companyService.getCompanies();
  }
}
