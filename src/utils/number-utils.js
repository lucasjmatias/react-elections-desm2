const formatPercent = numberValue =>
  numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'percent',
  });

const formatMoney = numberValue =>
  numberValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

const formatInteger = numberValue => numberValue.toLocaleString('pt-BR');

const reduceSumProperties = propName => (accumValue, b) =>
  accumValue + (b[propName] ?? 0);

export { formatPercent, formatMoney, formatInteger, reduceSumProperties };
