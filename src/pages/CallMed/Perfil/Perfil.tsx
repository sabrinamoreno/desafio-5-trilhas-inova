function Perfil (){

    return (
        <div>
            <h1>Perfil</h1>

            <p>Informações Pessoais</p>

            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome completo" />

            <label>E-mail</label>
            <input type="email" placeholder="Digite seu email" />   

            <label>CPF</label>
            <input type="number" placeholder="Digite seu CPF" />
        </div>
    )
}

export default Perfil;