import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsEmail, Length } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ example: '12.345.678/0001-99', description: 'CNPJ da empresa' })
  @IsString()
  @IsNotEmpty()
  @Length(14, 18) 
  cnpj: string;

  @ApiProperty({ example: '123.456.789-00', description: 'CPF do responsável' })
  @IsString()
  @IsNotEmpty()
  @Length(11, 14) 
  cpfResponsavel: string;

  @ApiProperty({ example: 'Empresa WeFit', description: 'Nome da empresa' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '11999999999', description: 'Celular do responsável' })
  @IsString()
  @IsNotEmpty()
  celular: string;

  @ApiProperty({ example: '1133334444', description: 'Telefone fixo da empresa', required: false })
  @IsString()
  @IsOptional()
  telefone?: string;

  @ApiProperty({ example: 'email@email.com', description: 'E-mail da empresa' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'email@email.com', description: 'Confirmação do e-mail' })
  @IsEmail()
  @IsNotEmpty()
  confirmarEmail: string;

  @ApiProperty({ example: '01010-000', description: 'CEP da empresa' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Rua da Empresa', description: 'Endereço' })
  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @ApiProperty({ example: '123', description: 'Número do endereço' })
  @IsString()
  @IsNotEmpty()
  numero: string;

  @ApiProperty({ example: 'Sala 1', description: 'Complemento do endereço', required: false })
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

  @ApiProperty({ example: 'SP', description: 'Estado (UF)' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ example: true, description: 'Se aceitou os termos e condições' })
  @IsBoolean()
  @IsNotEmpty()
  termosAceitos: boolean;
}
