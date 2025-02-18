import { Injectable } from '@nestjs/common';
import { CompanyRepository } from './repository/company.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async createCompany(data: CreateCompanyDto): Promise<Company> {
    return this.companyRepository.createCompany(data);
  }

  async getCompanies(): Promise<Company[]> {
    return this.companyRepository.findAll();
  }

  async findByCnpj(cnpj: string): Promise<Company | null> {
    return this.companyRepository.findByCnpj(cnpj);
  }
}
