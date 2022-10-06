import { Injectable, NotFoundException } from '@nestjs/common';
import { createClienteDto, updateClienteDto } from 'src/dto/clientes.dto';

@Injectable()
export class ClientesService {
    private counterId = 1
    private clientes = [
        {
            id: 1,
            name: 'Marco',
            lastName: 'Cueva',
            email: 'macuevam@gmail.com',
            phone: '+51979336360',
        },
    ];

    findOne(id: number) {
        const cliente = this.clientes.find((item) => item.id === id);
        if(!cliente) {
            throw new NotFoundException(`Cliente ${id} no encontrado`); 
        }
        return cliente;
    }

    findAll() {
        return this.clientes;
    }
    
    create(payload: createClienteDto) {
        this.counterId = this.counterId+1;
        const nuevoCliente = {
            id: this.counterId,
            ...payload
        }
        this.clientes.push(nuevoCliente);
        return nuevoCliente;
    }

    update(id: number, payload: updateClienteDto){
        const cliente = this.findOne(id);
        if(cliente) {
            const index = this.clientes.findIndex((item) => item.id === id);
            this.clientes[index] = {
                ...cliente,
                ...payload,
            };
            return this.clientes[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.clientes.findIndex((item) => item.id === id);
        if (index === -1){
            throw new NotFoundException(`Cliente #${id} no encontrado`);
        }
        this.clientes.splice(index, 1)
        return true;
    }
}
