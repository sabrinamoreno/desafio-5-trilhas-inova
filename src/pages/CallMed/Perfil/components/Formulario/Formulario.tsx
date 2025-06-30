import { useEffect, useState } from "react";
import style from "./Formulario.module.scss";
import axios from "axios";

function formatarCPF(valor: string) {
  return valor
    .replace(/\D/g, "") 
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

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
        const token = localStorage.getItem("token");

        if (!token) return;

        axios.get("http://nisystem.vps-kinghost.net/api/usuarios/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
                setCPF(response.data.cpf);
            })
            .catch((error) => {
                console.error("Erro ao buscar dados do usuário:", error);
            });
    }, []);


    async function validarFormulario() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const cpfRegex = /^\d{11}$/;

        const errosValidacao = {
            nome: nome.trim() === "",
            email: !emailRegex.test(email),
            cpf: !cpfRegex.test(cpf),
        };

        setErros(errosValidacao);

        const semErros = Object.values(errosValidacao).every((erro) => !erro);

        if (!semErros) return;

        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const resposta = await axios.put(
                "http://nisystem.vps-kinghost.net/api/usuarios/atualizar",
                { nome, email, cpf },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert(resposta.data.mensagem);
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            alert("Erro ao atualizar as informações.");
        }
    }


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
                        setCPF(e.target.value.replace(/\D/g, "").slice(0, 11)) // mantém só os números
                    }
                />
                {erros.cpf && <p className={style.error}>CPF inválido (11 dígitos)</p>}
            </div>



        </div>
    )

}

export default Formulario;