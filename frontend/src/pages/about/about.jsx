import React from "react"
import PageHeader from "../../components/PageHeader"

export default props => (
    <div>
        <PageHeader name="Sobre" small="Desenvolvimento" br={true} />
        <p className="lead">O projeto foi desenvolvido para a obtenção de conhecimentos com as bibliotecas do React,
            o que aconteceu. O entendimento sobre o assunto agora é maior do que no início do projeto.
        </p>
        <PageHeader small="Contato" br={true} />
        <p className="lead">GitHub: <a href="https://github.com/jhonpedro" target="_blank" rel="noopener noreferrer">jhonpedro</a></p>
    </div>
);
