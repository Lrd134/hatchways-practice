const toFarenheit = centigrade => ((parseFloat(centigrade) - 273.15) * 9/5 + 32).toFixed(0)
export default toFarenheit;