import '../../style/css/section.css'
import React, { Fragment, Component } from 'react';

import Page from '../unico/Page'
import Cadastro from './Cadastro'
import Table from './Table';
import AlunoService from '../../servicos/aluno'

class Alunos extends Component {

    constructor (props){
        super(props)
        this.state = {tAlunos: []}
    }

    componentDidMount() {
        this.carregarAlunos()
    }

    async carregarAlunos() {
        const tAlunos = await AlunoService.buscarAlunos()
        this.setState({tAlunos: tAlunos})
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.alunoEmEdição === prevState.alunoEmEdição){
            return
        }
    }

    editarAluno = (aluno) => {
        this.setState({alunoEmEdição: aluno})
    }

    excluirAluno = (aluno) => {
        AlunoService.excluirAluno(aluno.id)
            .then(() => this.carregarAlunos())
    }

    render(){
        return (
            <Fragment>
                <Page title="Cadastro de alunos">
                    <Cadastro/>
                </Page>
                <Page title="Lista de alunos">
                    <Table 
                        tAlunos={this.state.tAlunos}
                        editar={this.editarAluno}
                        excluir={this.excluirAluno}
                    />
                </Page>
            </ Fragment>
        )
    }
}

export default Alunos;