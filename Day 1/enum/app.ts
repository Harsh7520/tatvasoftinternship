export {}
enum Days{
    mon=10,tue,wed,thu,fri,sat,sun
}
function whichDay(day:Days)
{
    return day
}
console.warn(whichDay(Days.sat))