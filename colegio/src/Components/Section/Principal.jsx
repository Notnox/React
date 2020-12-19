import React from 'react'

const Principal = () => {
    return (
        <section className='corpo'>
            <h1>📢Está página é uma ferramenta para cadastro, exclusão, edição ou visualização de alunos.</h1>
            <h3>
                <p>
                    <h2>🔎 Busca 🔍</h2>
                    <article>Ao clicar na lupa, vai ser disponibilizado um campo de texto para preencher o nome do aluno que deseja pesquisar, automaticamente vai ser exibido todos os alunos com esse nome.</article>
                </p>
                <p>
                    <h2>📝 Cadastro 📝</h2>
                    <article>Esse campo é o local onde deverá ser preenchido com todas as informações para cadastro de um novo aluno.</article>
                </p>
                <p>
                    <h2>📕 Alunos 📕</h2>
                    <article>Esse campo será exibido todos os alunos cadastrados.</article>
                </p>
                <p>
                    <article>👉 <strong>Para acessar está página novamente, basta clicar na logomarca ou no Colégio Amorinha.</strong> 👈</article>
                </p>
            </h3>
        </section>
    )
}

export default Principal