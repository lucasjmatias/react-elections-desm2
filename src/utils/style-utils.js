const good = 'text-green-700';
const warning = 'text-yello-700';
const bad = 'text-red-600';

const colorizeNumber = numericValue =>
  numericValue === 0 ? '' : numericValue > 0 ? good : bad;

const colorizeWarning = isGood => (isGood ? good : warning);

export { colorizeNumber, colorizeWarning };
