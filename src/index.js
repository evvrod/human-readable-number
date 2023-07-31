module.exports = function toReadable(number) {
    if ((number > 999999999999) || (number < 0) || (!Number.isInteger(number))) { return ('error: enter a non-negative number less than 999 999 999 999'); }
    const numText = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalText = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const bigNumberText = ['', ' thousand ', ' million ', ' billion '];

    const numberMass = String(number).length % 3 === 0 ? String(number).match(/(.{1,3})/gim).reverse() : ('0'.repeat(3 - String(number).length % 3)).concat(String(number)).match(/(.{1,3})/gim).reverse();
    return numberMass.reduce((accumulative, value, index) => { return accumulative + toReadableThreeNumber(Number(value), numText, decimalText) + bigNumberText[index]; }, '');

    function toReadableThreeNumber(num, numText, decimalText) {
        const hundred = num < 100 ? '' : numText[~~(num / 100)] + ' hundred ';
        const decimal = ((num % 100) < 20) & (num % 100 != 0) ? numText[num % 100] :
            ((num % 100 != 0) ? decimalText[~~((num % 100) / 10) - 2] + (num % 10 != 0 ? ' ' + (numText[num % 10]) : '') : '');
        return hundred + decimal == '' ? 'zero' : (hundred + decimal).trim();
    }
}
