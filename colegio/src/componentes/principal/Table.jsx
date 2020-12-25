import React, { Component, Fragment } from 'react'
import Button from '../unico/Button'

class Table extends Component {

    Excluir(aluno){
        this.props.excluir(aluno)
    }

    Editar(aluno){
        this.props.editar(aluno)
    }

    render(){

        const { tAlunos } = this.props

        if (!tAlunos || tAlunos.length === 0) {
            return <span>Não existem alunos cadastrados.</span>
        }

        return(
            <Fragment>
                {tAlunos && tAlunos.length > 0 &&
                    <div className="tabela">
                        <table className="tabela-alunos">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Data de nascimento</th>
                                    <th>Idade</th>
                                    <th>Restrição alimentar</th>
                                    <th className='acoes' colSpan='2'>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tAlunos.map(alunos => (
                                    <tr key={alunos.id}>
                                        <td>{alunos.nome}</td>
                                        <td>{alunos.DdN}</td>
                                        <td>{alunos.idade}</td>
                                        <td>{alunos.ra}</td>
                                        <td>
                                            <Button
                                                Class='acoes'
                                                onClick={e => this.Editar(alunos)}
                                            >
                                                Editar
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                Class='acoes'
                                                onClick={e => this.Excluir(alunos)}
                                            >
                                                Excluir
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </Fragment>
        )
    }
}

export default Table