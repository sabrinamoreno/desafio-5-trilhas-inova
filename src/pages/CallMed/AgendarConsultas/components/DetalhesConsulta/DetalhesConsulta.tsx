import { useEffect, useState } from "react";
import style from "./DetalhesConsulta.module.scss";
import axios from "axios";

type Area = {
    id: number;
    nome: string;
};

type Medico = {
    id: number; 
    nome: string;
}

type Horario ={
    id: number; 
    data: string;
    hora_inicio: string;
    hora_fim: string;
}

function DetalhesConsulta() {

    const [horarioSelecionado, setHorarioSelecionado] = useState("");
    const [areaSelecionada, setAreaSelecionada] = useState("");
    const [medicoSelecionado, setMedicoSelecionado] = useState("");

    const [areas, setAreas] = useState<Area[]>([]);
    const [medicos, setMedicos] = useState<Medico[]>([]);
    const [horarios, setHorarios] = useState<Horario[]>([]);

    const [erros, setErros] = useState({
        area: false,
        medico: false,
        horario: false,
    });

    //Carrega especialidades
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        axios.get("http://nisystem.vps-kinghost.net/api/areas", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response.data)
                setAreas(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar especialidades: ", error);
            });
    }, []);

    //Carrega Médicos
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token || !areaSelecionada) return;

        axios.get(`http://nisystem.vps-kinghost.net/api/medicos/area/${areaSelecionada}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                setMedicos(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar médicos por área:", error);
            });
    }, [areaSelecionada]);

    //Carrega Horários
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token || !medicoSelecionado) return;

        axios.get(`http://nisystem.vps-kinghost.net/api/medicos/disponibilidade/${medicoSelecionado}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                setHorarios(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar médicos por área:", error);
            });
    }, [medicoSelecionado]);

    //Agenda consulta
    const handleAgendarConsulta = async () => {
        const token = localStorage.getItem("token");

        const validacao = {
            area: !areaSelecionada,
            medico: !medicoSelecionado,
            horario: !horarioSelecionado,
        };
        setErros(validacao);

        if (validacao.area || validacao.medico || validacao.horario) return;

        try {
            const response = await axios.post(
                "http://nisystem.vps-kinghost.net/api/consultas/agendar",
                {
                    medico_id: parseInt(medicoSelecionado),
                    disponibilidade_id: parseInt(horarioSelecionado),
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert(response.data.mensagem);
        } catch (error: any) {
            console.error("Erro ao agendar consulta:", error);
            alert("Erro ao agendar consulta.");
        }
    };



    return (
        <>
            <div className={style.consulta}>
                <h1 className={style.consulta__titulo}>Detalhes da Consulta</h1>

                <label className={style.consulta__label}>
                    Especialidade
                    <select
                        className={style.consulta__select}
                        value={areaSelecionada}
                        onChange={(e) => setAreaSelecionada(e.target.value)}
                    >
                        <option value="">Selecione uma especialidade</option>
                        {areas.map((area) => (
                            <option key={area.id} value={area.id.toString()}>
                                {area.nome}
                            </option>
                        ))}
                    </select>
                    {erros.area && <p className={style.consulta__error}>Selecione uma especialidade</p>}
                </label>

                <label className={style.consulta__label}>
                    Médico
                    <select
                        className={style.consulta__select}
                        value={medicoSelecionado}
                        onChange={(e) => setMedicoSelecionado(e.target.value)}
                        disabled={!areaSelecionada}
                    >
                        <option value="">Selecione um médico</option>
                        {medicos.map((medico) => (
                            <option key={medico.id} value={medico.id.toString()}>
                                {medico.nome}
                            </option>
                        ))}
                    </select>
                    {erros.medico && <p className={style.consulta__error}>Selecione um médico</p>}
                </label>

                <label className={style.consulta__label}>
                    Horários
                    <select
                        className={style.consulta__select}
                        value={horarioSelecionado}
                        onChange={(e) => setHorarioSelecionado(e.target.value)}
                        disabled={!medicoSelecionado}
                    >
                        <option value="">Selecione um horário</option>
                        {horarios.map((horario) => (
                            <option key={horario.id} value={horario.id.toString()}>
                                {horario.hora_inicio}
                            </option>
                        ))}
                    </select>
                    {erros.horario && <p className={style.consulta__error}>Selecione um horário</p>}
                </label>
            </div>

            <button className={style.consulta__botao} onClick={handleAgendarConsulta}>
                Confirmar
            </button>
        </>
    )


}

export default DetalhesConsulta;