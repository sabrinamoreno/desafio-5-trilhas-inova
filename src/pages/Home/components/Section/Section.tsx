import style from "./Section.module.scss"

type Props = {
  titulo: string,
  texto: string;
};

export default function Section({ titulo, texto }: Props) {
  return (
    <section className="Section">
      <h2 className={style.Section__Subtitulo}>{titulo}</h2>
      <p className={style.Section__Texto}>{texto}</p>
    </section>
  );
}