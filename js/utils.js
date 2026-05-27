// Source - https://stackoverflow.com/a/77517986
// Posted by Martin
// Retrieved 2026-05-26, License - CC BY-SA 4.0

/**
 * Get elapsed time ~ difference between two date/time values (ordered automatically)
 * 
 * @param {*} start_time - start time
 * @param {*} end_time - end time
 * @throws {TypeError} on invalid start/end time value
 * @returns {{
 *   start: Date,
 *   end: Date,
 *   years: number,
 *   months: number,
 *   days: number,
 *   hours: number,
 *   minutes: number,
 *   seconds: number,
 *   milliseconds: number,
 *   total_days: number,
 *   total_time: number,
 *   toString: (()=>string),
 * }} `{[key: string]: any}`
 */
function elapsedTime(start_time, end_time){

    /**
     * Parse date value ~ accepts valid Date instance, integer timestamp or date string
     *  
     * @param {*} val 
     * @returns {Date|undefined}
     */
    const _parse_date = val => {
        if (val instanceof Date) return !isNaN(val = val.getTime()) ? new Date(val) : undefined;
        else if ('string' === typeof val) return !isNaN(val = Date.parse(val)) ? new Date(val) : undefined;
        return Number.isInteger(val) ? new Date(val) : undefined;
    };

    //-- parse arguments
    if (!(start_time = _parse_date(start_time))) throw new TypeError('Invalid elapsed start time value! Pass a valid Date instance, integer timestamp or date string value.');
    if (!(end_time = _parse_date(end_time))) throw new TypeError('Invalid elapsed end time value! Pass a valid Date instance, integer timestamp or date string value.');
    const min_max = start_time > end_time ? [end_time, start_time] : [start_time, end_time];
    const start = new Date(min_max[0].getTime());
    const end = new Date(min_max[1].getTime());

    //-- parse elapsed time
    let years = 0;
    let months = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0
    const total_time = end.getTime() - start.getTime();
    const total_days = Math.floor(total_time / (24 * 60 * 60 * 1000));
    if ((milliseconds += (end.getMilliseconds() - start.getMilliseconds())) < 0){
        seconds --;
        milliseconds += 1000;
    }
    if ((seconds += (end.getSeconds() - start.getSeconds())) < 0){
        minutes --;
        seconds += 60;
    }
    if ((minutes += (end.getMinutes() - start.getMinutes())) < 0){
        hours --;
        minutes += 60;
    }
    if ((hours += (end.getHours() - start.getHours())) < 0){
        days --;
        hours += 24;
    }
    const start_year = start.getFullYear();
    let start_month = start.getMonth();
    years = end.getFullYear() - start_year;
    if ((months = end.getMonth() - start_month) < 0){
        years --;
        months += 12;
    }
    if ((days += (end.getDate() - start.getDate())) < 0){
        if (end.getMonth() === start.getMonth()) start_month ++;
        if (months <= 0){
            years --;
            months = 11;
        }
        else months --;
        days += new Date(start_year, start_month + 1, 0).getDate();
    }

    //<< result
    return {
        start,
        end,
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
        total_days,
        total_time,
        toString: function(){
            const values = [];
            const _add = (val, singular) => void (val ? values.push(val + ' ' + (val === 1 ? singular : singular + 's')) : null);
            _add(years, 'year');
            _add(months, 'month');
            _add(days, 'day');
            return values.length > 1 ? values.slice(0, -1).join(', ') + ' and ' + values[values.length - 1] : values.join('');
        },
    }
}

result = elapsedTime(new Date(2022,8,22),Date.now());
console.log(result);

document.getElementById("time").innerHTML = result.toString();