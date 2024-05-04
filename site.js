let name = document.getElementById('name');
let birthday = document.getElementById('birthday');
let job = document.getElementById('occupation');
let death = document.getElementById('deceased');

function toggleRow(generation) {
  if(document.getElementById(generation).style.display == "flex")
    document.getElementById(generation).style.display = "none";
  else
    document.getElementById(generation).style.display = "flex"; }

function toggleMenu(id) {
  if(document.getElementById('tooltip').style.display == "flex") {
    if(last_id == id) { document.getElementById('tooltip').style.display = "none"; }
    else { last_id = id; }}
  else { document.getElementById('tooltip').style.display = "flex"; last_id = id; }

   switch(id) {
    case 'mrt':
      name.innerHTML = "John Toonen";
      birthday.innerHTML = "April 27th 1934";
      job.innerHTML = "Farmer";
      break;
    case 'cory':
      name.innerHTML = "Cory Toonen";
      birthday.innerHTML = "";
      death.innerHTML = " - ";
      job.innerHTML = "";
      break;
    case 'bernadine':
      name.innerHTML = "Bernadine";
      birthday.innerHTML = "";
      death.innerHTML = " - ";
      job.innerHTML = "";
      break;
    case 'charlie':
      name.innerHTML = "Charles Underhill";
      birthday.innerHTML = "1915";
      death.innerHTML = "";
      job.innerHTML = "Firewatch";
      break;
    case 'kathi':
      name.innerHTML = "Kathi Lynn Underhill";
      birthday.innerHTML = "August 4th 1961";
      job.innerHTML = "Model";
      break;
    case 'andy':
      name.innerHTML = "Anthony Peter Toonen";
      birthday.innerHTML = "February 5th 1961";
      job.innerHTML = "Farmer";
      break;
    case 'marti':
      name.innerHTML = "Marti Anne Toonen";
      birthday.innerHTML = "September 4th 1995";
      job.innerHTML = "Game Developer";
      break;
    case 'annie':
      name.innerHTML = "Annie Lynn Toonen";
      birthday.innerHTML = "December 4th 1999";
      job.innerHTML = "Behavioural Therapist, right?";
      break;
    case 'brock':
      name.innerHTML = "Brock Morgan Toonen";
      birthday.innerHTML = "November 5th 1986";
      job.innerHTML = "Something Cars";
      break;
    case 'alissa':
      name.innerHTML = "Alissa Wilson";
      birthday.innerHTML = "Something, I'm Sure";
      job.innerHTML = "Who Knows";
      break;
    case null:
      alert('tell marti it said null and who you clicked on');
      break;
    case '':
      alert('tell marti it said blank and who you clicked on');
      break;
  }
}
