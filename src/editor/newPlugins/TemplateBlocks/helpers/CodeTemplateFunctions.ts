import dayjs from "dayjs";

export const helperFunctions = {
    dateDifference: (a: Date, b: Date, unit?: any) => {
        return dayjs(a).diff(dayjs(b), unit)
    },
    formatDate: (d: Date, format?: string) => {
        return dayjs(d).format(format)
    },
    datePlus: (a: Date, b: number, unit?: any) => {
        return dayjs(a).add(b, unit)
    },
    dateMinus: (a: Date, b: number, unit?: any) => {
        return dayjs(a).subtract(b, unit)
    },
}