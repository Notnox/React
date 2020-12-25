import { createServer, Model } from 'miragejs';
import * as constants from './Constantes';
import { tAlunos } from  '../componentes/conts/tAlunos';

export function Servidor({environment = 'test'} = {}) {
    const server = createServer({
        environment,

        models: {
            tAluno: Model,
        },

        seeds(server){
            tAlunos.forEach(aluno => server.create("tAluno", aluno));
        },

        routes() {
            this.namespace = constants.DEVINHOUSE_API

            this.get('/tAlunos', schema => schema.tAlunos.all().models);

            this.delete('/tAlunos/:id', (schema, request) => {
                const id = request.params.id;

                return schema.tAlunos.find(id).destroy();
            });
        },
    });

    return server;
}