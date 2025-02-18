import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  ConflictException, 
  InternalServerErrorException, 
  NotFoundException 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova empresa' })
  @ApiResponse({ status: 201, description: 'Empresa criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 409, description: 'CNPJ já cadastrado' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  @ApiBody({
    description: 'JSON para criação da empresa',
    required: true,
    schema: {
      example: {
        cnpj: '12.345.678/0001-90',
        cpfResponsavel: '123.456.789-10',
        nome: 'Empresa XYZ',
        celular: '+55 11 98765-4321',
        telefone: '+55 11 3456-7890',
        email: 'contato@empresa.com',
        confirmarEmail: 'contato@empresa.com',
        cep: '01001-000',
        logradouro: 'Av. Paulista',
        numero: '123',
        complemento: 'Sala 101',
        cidade: 'São Paulo',
        bairro: 'Centro',
        estado: 'SP',
        termosAceitos: true,
      },
    },
  })
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      const existingCompany = await this.companyService.findByCnpj(createCompanyDto.cnpj);
      if (existingCompany) {
        throw new ConflictException('CNPJ já cadastrado.');
      }

      const newCompany = await this.companyService.createCompany(createCompanyDto);
      return {
        message: 'Empresa criada com sucesso!',
        data: newCompany,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao criar empresa.');
    }
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as empresas cadastradas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empresas retornada com sucesso',
    schema: {
      example: [
        {
          cnpj: '12.345.678/0001-90',
          cpfResponsavel: '123.456.789-10',
          nome: 'Empresa XYZ',
          celular: '+55 11 98765-4321',
          email: 'contato@empresa.com',
          cidade: 'São Paulo',
          estado: 'SP',
        },
      ],
    },
  })
  @ApiResponse({ status: 404, description: 'Nenhuma empresa encontrada' })
  async findAll() {
    try {
      const companies = await this.companyService.getCompanies();
      if (companies.length === 0) {
        throw new NotFoundException('Nenhuma empresa encontrada.');
      }
      return companies;
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar empresas.');
    }
  }
}
