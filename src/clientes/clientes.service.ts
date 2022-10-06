import { Injectable } from '@nestjs/common';
import { createClienteDto, updateClienteDto } from '../dto/clientes.dto';
import { Cliente } from '../entities/clientes.entity';
import { ClientesDao } from './clientes.dao';

@Injectable()
export class ClientesService {

    constructor(
        private ClientesDao: ClientesDao   
    ) {}

    findOne(id: number) : Promise<Cliente> {
        return this.ClientesDao.findOne(id);
    }

    findAll(): Promise<Cliente[]> {
        return this.ClientesDao.findAll();
    }
    
    async create(payload: createClienteDto): Promise<Cliente> {
        let cliente = new Cliente();
        cliente.email = payload.email;
        cliente.lastName = payload.lastName;
        cliente.name = payload.name;
        cliente.phone = payload.phone;
        return await this.ClientesDao.create(cliente);
    }

    async update(id:number ,payload: updateClienteDto): Promise<Cliente> {
        let cliente = new Cliente();
        cliente.id = id;
        cliente.email = payload.email;
        cliente.lastName = payload.lastName;
        cliente.name = payload.name;
        cliente.phone = payload.phone;
        return await this.ClientesDao.update(cliente);
    }

    remove(id: number) {
        return this.ClientesDao.remove(id);
    }
}
