import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/create-company.dto';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly repository: Repository<Company>,
  ) {}

  async createCompany(data: CreateCompanyDto): Promise<Company> {
    const company = this.repository.create(data);
    return this.repository.save(company);
  }

  async findAll(): Promise<Company[]> {
    return this.repository.find();
  }

  async findByCnpj(cnpj: string): Promise<Company | null> {
    return this.repository.findOne({ where: { cnpj } });
  }
}
