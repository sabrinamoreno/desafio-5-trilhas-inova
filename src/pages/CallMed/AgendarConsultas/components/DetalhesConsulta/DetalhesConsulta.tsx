import { useEffect, useState } from "react";
import style from "./DetalhesConsulta.module.scss";
import { useLocation } from "react-router-dom";
import { Area } from "../../../../../types/area";
import { Medico } from "../../../../../types/medico";
import { Horario } from "../../../../../types/horario";
import { agendarConsulta, buscarAreas, buscarHorariosPorMedico, buscarMedicosPorArea } from "../../../../../utils/agendarServices";
import { useNavigate } from "react-router-dom";


function DetalhesConsulta() {
    const navigate = useNavigate();
    const location = useLocation();
    const dadosRecebidos = location.state as {
        medicoId: number;
        nome: string;
        especialidade: string;
    };

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

    //Busca Especialidades
    useEffect(() => {
        buscarAreas()
            .then((res) => {
                setAreas(res.data);
                const area = res.data.find((a: Area) => a.nome === dadosRecebidos.especialidade);
                if (area) setAreaSelecionada(area.id.toString());
            })
            .catch(console.error);
    }, []);

    //Busca Medicos
    useEffect(() => {
        if (!areaSelecionada) return;

        buscarMedicosPorArea(areaSelecionada)
            .then((res) => {
                setMedicos(res.data);
                const existe = res.data.find((m: Medico) => m.id === dadosRecebidos.medicoId);
                if (existe) setMedicoSelecionado(dadosRecebidos.medicoId.toString());
            })
            .catch(console.error);
    }, [areaSelecionada]);

    //Buscar Disponibilidades
    useEffect(() => {
        if (!medicoSelecionado) return;

        buscarHorariosPorMedico(medicoSelecionado)
            .then((res) => setHorarios(res.data))
            .catch(console.error);
    }, [medicoSelecionado]);

    const handleAgendarConsulta = async () => {
        const camposVazios = {
            area: !areaSelecionada,
            medico: !medicoSelecionado,
            horario: !horarioSelecionado,
        };

        setErros(camposVazios);

        if (Object.values(camposVazios).some(Boolean)) return;

        try {
            const res = await agendarConsulta(+medicoSelecionado, +horarioSelecionado);
            alert(res.data.mensagem);
            navigate("/callmed/consultas");
        } catch (err) {
            alert("Erro ao agendar consulta");
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
                        {horarios.map((horario) => {
                            const dataFormatada = new Date(horario.data).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            });

                            return (
                                <option key={horario.id} value={horario.id.toString()}>
                                    {dataFormatada} às {horario.hora_inicio}
                                </option>
                            );
                        })}
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