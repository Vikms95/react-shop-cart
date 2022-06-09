const toOneDecimal = (num: string) => (Math.round(parseFloat(num) * 10) / 10).toFixed(1);

export default toOneDecimal;
