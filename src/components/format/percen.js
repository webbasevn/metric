export default function FormatPercen(num1,num2,digits){
    return Number( num1/ num2).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:digits})
}