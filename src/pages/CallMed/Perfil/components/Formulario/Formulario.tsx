import { useEffect, useState } from "react";
import style from "./Formulario.module.scss";
import { formatarCPF } from "../../../../../utils/formatters";
import { atualizarUsuario, buscarUsuario } from "../../../../../utils/usuarioService";
import { validarCPF, validarEmail } from "../../../../../utils/validacoes";

function Formulario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");

    const [erros, setErros] = useState({
        nome: false,
        email: false,
        cpf: false,
    });

    useEffect(() => {
        buscarUsuario()
            .then((res) => {
                setNome(res.data.nome);
                setEmail(res.data.email);
                setCPF(res.data.cpf);
            })
            .catch((err) => {
                console.error("Erro ao buscar dados do usuário:", err);
            });
    }, []);

    const validarFormulario = async () => {
        const errosValidacao = {
            nome: nome.trim() === "",
            email: !validarEmail(email),
            cpf: !validarCPF(cpf),
        };

        setErros(errosValidacao);

        const semErros = Object.values(errosValidacao).every((erro) => !erro);
        if (!semErros) return;

        try {
            const resposta = await atualizarUsuario({ nome, email, cpf });
            alert(resposta.data.mensagem);
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            alert("Erro ao atualizar as informações.");
        }
    };


    return (
        <div className={style["perfil-container"]}>

            <div className={style["perfil__header-content"]}>
                <h2 className={style.perfil__tituto}>Informações Pessoais</h2>
                <button
                    onClick={validarFormulario}
                    className={style["perfil__save-button"]}
                >
                    Salvar Informações
                </button>
            </div>


            <div className={style["form-grupo"]}>
                <label htmlFor="nomeCompleto" className={style["form-label"]}>Nome Completo</label>
                <input
                    type="text"
                    value={nome}
                    id="nomeCompleto"
                    className={style["form-input"]}
                    placeholder="Digite seu nome completo"
                    onChange={(e) => setNome(e.target.value)}
                />
                {erros.nome && (
                    <p className={style.error}>Informe seu nome completo</p>
                )}
            </div>

            <div className={style["form-grupo"]}>
                <label htmlFor="email" className={style["form-label"]}>E-mail</label>
                <input
                    value={email}
                    type="email"
                    id="email"
                    className={style["form-input"]}
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {erros.email && (
                    <p className={style.error}>Informe um e-mail válido</p>
                )}
            </div>

            <div className={style["form-grupo"]}>
                <label htmlFor="cpf" className={style["form-label"]}>
                    CPF
                </label>
                <input
                    value={formatarCPF(cpf)}
                    id="cpf"
                    className={style["form-input"]}
                    placeholder="Digite seu CPF"
                    onChange={(e) =>
                        setCPF(e.target.value.replace(/\D/g, "").slice(0, 11))
                    }
                />
                {erros.cpf && <p className={style.error}>CPF inválido (11 dígitos)</p>}
            </div>



        </div>
    )

}

export default Formulario;