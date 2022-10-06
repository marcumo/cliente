import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "src/entities/clientes.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClientesDao {
    constructor(
        @InjectRepository(Cliente)
        private clienteRepo: Repository<Cliente>,   
    ) {}

    findAll(): Promise<Cliente[]> {
        return this.clienteRepo.find();
    }

    findOne(id: number) {
        return this.clienteRepo.findOneBy({id});
    }

    async create(payload: Cliente): Promise<Cliente> {
        return this.clienteRepo.save(payload);
    }

    async update(payload: Cliente): Promise<Cliente> {
        return this.clienteRepo.save(payload);
    }

    remove(id: number) {
        return this.clienteRepo.delete(id);
    }
}