export const formatNumber = (number, decimal = 0) => {
    if (String(number) === 'Infinity') {
        return '0';
    }

    if (isNaN(+replaceAll(String(number), ',', ''))) {
        return '0';
    }
    // Convert the number to a string and split it into integer and decimal parts
    const [integer, decimalPart] = String(number).split('.');

    // Format the integer part with commas
    const formattedInteger = Math.abs(+integer) === 0 ? '0' : integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // If there is no decimal part, return the formatted integer
    if (!decimal) {
        return formattedInteger;
    }

    // If there is a decimal part, format it to the desired number of decimal places
    const formattedDecimal = decimalPart ? decimalPart.slice(0, decimal) : '';
    if (!formattedDecimal) {
        return `${formattedInteger}`;
    }

    return `${formattedInteger}.${formattedDecimal}`;
};

export function replaceAll(value, search, replace) {
    return value.split(search).join(replace);
}

export function localDateToUsDateIOSString(localDate) {
    return new Date(localDate.split('/').reverse().join('/'));
}

export function minusTimes(date, timesMinusInMilliseconds) {
    return new Date(new Date(localDateToUsDateIOSString(date)).getTime() - timesMinusInMilliseconds).toLocaleDateString(
        'en-IN',
    );
}
