import dayjs from "dayjs";

export const helperFunctions = {
    dateDifference: (a: Date, b: Date, unit?: any) => {
        return dayjs(a).diff(dayjs(b), unit)
    },
}