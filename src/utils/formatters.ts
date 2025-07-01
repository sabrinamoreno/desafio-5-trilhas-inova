export const formatarData = (value: string) => {
    const digits = value.replace(/\D/g, "");
    let formattedValue = digits;

    if (digits.length > 2) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    if (digits.length > 4) {
      formattedValue = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    }

    return formattedValue;
  };

  export const converterParaISO = (data: string) => {
  const [dia, mes, ano] = data.split("/");
  return `${ano}-${mes}-${dia}`;
};


export function formatarCPF(valor: string) {
  return valor
    .replace(/\D/g, "") 
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}