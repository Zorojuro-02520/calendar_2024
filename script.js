/* This calender is only for the year 2024 and it won't show any other years before or after 2024 */
/*
 Variables used in g554 function 
i --> for week number
j --> for week days
k --> for representing date in calender
end_date --> for determining the last date of the month 
flag --> find the postion of 31/ last date in calender
f --> to empty the remaing cells with blanks 
C_elelment --> for altering date in calender

 Variables used in find31 function
i --> for week number
j --> for week days
C_elelment --> for altering date in calender

 Variables used in month_selector function
M_element --> for changing inner htmal for month
token --> for selecting the month
month_selector_1 --> for selecting the month
*/
/*----------------------------------------------------------------------------------------------------------*/

let month_selector_1 = 1;

// Confirm the current month

function month_selector(token) {
  let M_element = document.getElementById(`month_id`);
  if (token === 20 && month_selector_1 === 1) {
    alert("Can't go back yet.");
    return;
  } else if (token === 10 && month_selector_1 === 12) {
    alert("Can't go forward yet.");
    return;
  } else if (token === 10) {
    month_selector_1 += 1;
  } else if (token === 20) {
    month_selector_1 -= 1;
  }
  switch (month_selector_1) {
    case 1:
      M_element.innerHTML = "January";
      break;
    case 2:
      M_element.innerHTML = "February";
      break;
    case 3:
      M_element.innerHTML = "March";
      break;
    case 4:
      M_element.innerHTML = "April";
      break;
    case 5:
      M_element.innerHTML = "May";
      break;
    case 6:
      M_element.innerHTML = "June";
      break;
    case 7:
      M_element.innerHTML = "July";
      break;
    case 8:
      M_element.innerHTML = "August";
      break;
    case 9:
      M_element.innerHTML = "September";
      break;
    case 10:
      M_element.innerHTML = "October";
      break;
    case 11:
      M_element.innerHTML = "November";
      break;
    case 12:
      M_element.innerHTML = "December";
      break;

    default:
      M_element.innerHTML = "Year 2025";
  }
  g554();
}

// function for calender

function g554() {
  const date_position = [0, 2, 5, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1];
  let i = 1; //i is for week number
  let k = 1; // j is for week days
  let flag = date_position[month_selector_1]; // get the 1st date of current month position
  let end_date = last_date(); // Sub-2 for last date of current month

  // for looping date from 1 to 31 on calender
  for (let f = flag; f >= 1; f--) {
    let C_elelment = document.getElementById(`W1D${f}`);
    C_elelment.innerHTML = "";
  }
  for (i = 1; i <= 6; i++) {
    for (let j = flag; j <= 7; j++) {
      let C_elelment = document.getElementById(`W${i}D${j}`);
      //console.log(C_elelment);
      C_elelment.innerHTML = k;
      if (k <= end_date) {
        k++;
      } else {
        let C_elelment = document.getElementById(`W${i}D${j}`);
        C_elelment.innerHTML = "";
      }
    }
    flag = 1;
  }
}

// function for finding location of 31

// function find_last_date() {
//   let temp = 0;
//   for (let i = 5; i <= 6; i++) {
//     for (let j = 1; j <= 7; j++) {
//       let C_elelment = document.getElementById(`W${i}D${j}`);

//       if (C_elelment.innerHTML > temp) {
//         temp = C_elelment.innerHTML;
//       } else {
//         return j;
//       }
//     }
//   }
// }

//for conforming last date in calender

function last_date() {
  switch (month_selector_1) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (2024 % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
  }
}
