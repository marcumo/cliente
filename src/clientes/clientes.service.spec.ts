import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cliente } from '../entities/clientes.entity';
import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  let service: ClientesService;
  const mockRepository = {
    id: 1,
    name: 'marco',
    lastname: 'cueva',
    email: 'macuevam@gmail.com',
    phone: '+51979336360'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesService, {provide:getRepositoryToken(Cliente), useValue: mockRepository }],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
