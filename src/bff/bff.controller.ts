import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompanyService } from '../company/company.service';
import { CreateCompanyDto } from '../company/dto/create-company.dto';

@Controller('bff/company')
export class BffController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(@Body() data: CreateCompanyDto) {
   
    const formattedData = {
      ...data,
      cnpj: data.cnpj.replace(/\D/g, ''), 
      cpfResponsavel: data.cpfResponsavel.replace(/\D/g, ''), 
    };

    return await this.companyService.createCompany(formattedData);
  }

  @Get()
  async getCompanies() {
    const companies = await this.companyService.getCompanies();

    return companies.map(company => ({
      id: company.id,
      cnpj: company.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5"),
      cpfResponsavel: company.cpf_responsavel.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"), 
      nome: company.nome,
      celular: company.celular,
      telefone: company.telefone || '',
      email: company.email,
      endereco: {
        cep: company.cep,
        logradouro: company.logradouro,
        numero: company.numero,
        complemento: company.complemento || '',
        cidade: company.cidade,
        bairro: company.bairro,
        estado: company.estado,
      },
    }));
  }
}
