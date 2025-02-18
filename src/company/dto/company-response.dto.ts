import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEmail, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({ example: '12.345.678/0001-90', description: 'CNPJ da empresa', minLength: 14, maxLength: 18 })
  @IsString()
  @IsNotEmpty()
  @Length(14, 18)
  cnpj: string;

  @ApiProperty({ example: '123.456.789-10', description: 'CPF do responsável', minLength: 11, maxLength: 14 })
  @IsString()
  @IsNotEmpty()
  @Length(11, 14)
  cpfResponsavel: string;

  @ApiProperty({ example: 'Empresa XYZ', description: 'Nome da empresa' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '+55 11 98765-4321', description: 'Celular de contato' })
  @IsString()
  @IsNotEmpty()
  celular: string;

  @ApiProperty({ example: '+55 11 3456-7890', description: 'Telefone fixo', required: false })
  @IsString()
  @IsOptional()
  telefone?: string;

  @ApiProperty({ example: 'contato@empresa.com', description: 'E-mail da empresa' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'contato@empresa.com', description: 'Confirmação do e-mail' })
  @IsEmail()
  @IsNotEmpty()
  confirmarEmail: string;

  @ApiProperty({ example: '01001-000', description: 'CEP da empresa' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Av. Paulista', description: 'Logradouro' })
  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @ApiProperty({ example: '123', description: 'Número do endereço' })
  @IsString()
  @IsNotEmpty()
  numero: string;

  @ApiProperty({ example: 'Sala 101', description: 'Complemento', required: false })
  @IsString()
  @IsOptional()
  complemento?: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'Centro', description: 'Bairro' })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({ example: 'SP', description: 'Estado' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: true, description: 'Aceitação dos termos' })
  @IsBoolean()
  @IsNotEmpty()
  termosAceitos: boolean;
}
