var day = 'saturday';
var dayofweek;
if (day === 'monday') {
    dayofweek = 'monday';
}
else if (day === 'tuesday') {
    dayofweek = 'tuesday';
}
else if (day === 'wednesday') {
    dayofweek = 'wednesday';
}
else if (day === 'thursday') {
    dayofweek = 'thursday';
}
else if (day === 'friday') {
    dayofweek = 'friday';
}
else if (day === 'saturday') {
    dayofweek = 'saturday';
}
else if (day === 'sunday') {
    dayofweek = 'sunday';
}
else {
    dayofweek = 'invalid day';
}
console.log("day of the week is ".concat(dayofweek));
