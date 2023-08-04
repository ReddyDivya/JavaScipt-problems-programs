//Write a function that can convert the time input given in 12 hours format to 24-hour format

//Method 1: for time format 12:10 AM

function convertTo24HrsFormat(time) {

    //1. Extract the given time into 2 parts i.e. time and AM/PM
    const [vtime, period] = time.split(' ');

    //2. Split time part into 2 parts i.e. hours and minutes
    const [hours, minutes] = vtime.split(':');

    //3. Convert the hours part into an integer
    let hoursInt = parseInt(hours);

    //4. Special case i.e. 12am and 12pm to 0 and 12, respectively
    if(hoursInt === 12)
    {
        hoursInt = period === 'AM' ? 0 : 12;
    }
    else
    {
        /*
        5. Adjust the hours based on 'AM/PM' period for other case
        (i.e. noon and midnight)
        */

        hoursInt += period === 'PM' ? 12 : 0;
    }

    //6. Convert hours and minutes to a string in 24 hrs format
    const hours24 = hoursInt.toString().padStart(2, '0');
    const minutes24 = minutes.padStart(2, '0');

    return `${hours24}:${minutes24}`;
}

console.log(`Converted time: ${convertTo24HrsFormat('12:10 AM')}`);//00: 10
console.log(`Converted time: ${convertTo24HrsFormat('12:10 PM')}`);//12:10
console.log(`Converted time: ${convertTo24HrsFormat('7:0 AM')}`);//07:10
console.log(`Converted time: ${convertTo24HrsFormat('6:1 PM')}`);//18:01
console.log(`Converted time: ${convertTo24HrsFormat('12:1 AM')}`);//00:01
console.log(`Converted time: ${convertTo24HrsFormat('2:30 PM')}`);//14:30
console.log(`Converted time: ${convertTo24HrsFormat('8:10 PM')}`);//20:10

/*
//Method 2: for time format 12:10AM
The function convertTo24HrsFormat takes a time string in the format "hh:mmAM" or "hh:mmPM" (12-hour format) as input.
*/

function convertTo24HrsFormat(time12) {
/*
1. patterns - hh:mmAM or hh:mmPM where hh - hours (1 or 2 digits), 
mm - minutes (always 2 digits), and AM or PM - period (case-insensitive).
*/

  /*
  ^ => start of an input string.
  (\d{1,2}) => First capturing group.
  (\d) => hour in 12-hour format.
  {1,2} => hour can be one or two digits.
  : => separate the hour and minute parts of the time.
  (\d{2}) => second capturing group. It matches exactly two digits representing the minutes.
  ([APap][Mm]) => third capturing group. It matches either "AM" or "PM" in a case-insensitive manner.
                [] => indicate a character class, so it matches one character that is either "A" or "P" (in any case)
                followed by one character that is either "M" (in uppercase) or "m" (in lowercase).
   $ => end of an input string.
  */
  const timeRegex = /^(\d{1,2}):(\d{2})([APap][Mm])$/;
  const match = time12.match(timeRegex);

  //2. invalid pattern then throw an error
  if (!match) 
  {
    throw new Error('Invalid time format. Please use "hh:mmAM" or "hh:mmPM".');
  }

  //3. Valid format then extract hours, minutes and period
  let hoursInt = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  /*
    4. 12:00 AM (midnight), we set the hours to 0 and 12:00 PM(noon) to 12 in the 24-hour format.
  */  
  if (hoursInt === 12 && period === 'AM') {
    hoursInt = 0;
  } else if (period === 'PM' && hoursInt !== 12) {
    hoursInt += 12;
  }
  
  //5. converted back to a string with 2 digits, padding with leading zeros 
  const hours24 = hoursInt.toString().padStart(2, '0');
  return `${hours24}:${minutes}`;
}

// Test with '12:10AM'
console.log(`Converted time: ${convertTo24HrsFormat('12:10PM')}`);//12:10
console.log(`Converted time: ${convertTo24HrsFormat('07:00AM')}`);//07:10
console.log(`Converted time: ${convertTo24HrsFormat('06:01PM')}`);//18:01
console.log(`Converted time: ${convertTo24HrsFormat('12:01AM')}`);//00:01
console.log(`Converted time: ${convertTo24HrsFormat('02:30PM')}`);//14:30
console.log(`Converted time: ${convertTo24HrsFormat('08:10PM')}`);//20:10
