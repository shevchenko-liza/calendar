import dayjs from "dayjs";

export const GetMonth = (month = dayjs().month()) => {
    month = Math.floor(month);
    const year = dayjs().year();
    const firstDay = dayjs(new Date(year, month, 1)).day();
    let currentMonth = firstDay + 1;
    const days = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonth++;
            return dayjs(new Date(year, month, currentMonth));
        });
    });
    return days;
}
