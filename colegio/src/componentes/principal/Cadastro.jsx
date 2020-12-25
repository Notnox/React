import React, { Fragment } from 'react';

import Input from '../unico/Input'
import Button from '../unico/Button'

const Cadastro = () => {
    return (
        <Fragment>
            <Input 
                type='text'
                placeholder='Nome'
            />
            <Input 
                type='date'
                placeholder='Data de Nascimento'
            />
            <Input 
                type='text'
                placeholder='Nome do Responsável pela criança'
            />
            <Input 
                type='tel'
                placeholder='Telefone de Contato do Responsável pela criança'
            />
            <Input 
                type='text'
                placeholder='Em caso de emergência avisar:'
            />
            <Input 
                type='tel'
                placeholder='Telefone para Emergências'
            />
            <Input 
                type='checkbox'
                placeholder='Possui Restrição Alimentar'
            />
            <Input 
                type='text'
                placeholder='Descrição das Restrições Alimentares'
            />
            <Input 
                type='checkbox'
                placeholder='Autorização de fotos e vídeos da criança para uso escolar'
            />
            <Input 
                type='text'
                placeholder='Lista de autorizados a buscar a criança.'
            />
            <Input 
                type='text'
                placeholder='Turma'
            />
            <Input 
                type='text'
                placeholder='Observações adicionais.'
            />
            <Button Class='cadastro'>
                Adicionar
            </Button>
            <Button Class='cadastro'>
                Alterar
            </Button>
        </ Fragment>
    )
}

export default Cadastro;