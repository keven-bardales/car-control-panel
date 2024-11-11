export default function dateFormatter(date: string, options?: Intl.DateTimeFormatOptions) {
  let optionsDefault: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (options) {
    optionsDefault = {
      ...optionsDefault,
      ...options,
    };
  }

  const formatter = new Intl.DateTimeFormat("es-ES", optionsDefault);

  return formatter.format(new Date(date));
}
