type Props = {
  titulo: string,
  texto: string;
};

export default function Section({ titulo, texto }: Props) {
  return (
    <section className="Section">
      <h2 className="Section__Subtitulo">{titulo}</h2>
      <p className="Section__Texto">{texto}</p>
    </section>
  );
}