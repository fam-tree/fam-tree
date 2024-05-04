let name = document.getElementById('name');
let birthday = document.getElementById('birthday');
let job = document.getElementById('occupation');
let death = document.getElementById('deceased');
let partner = document.getElementById('partner');
let children = document.getElementById('children');
let parents = document.getElementById('parents');

function toggleRow(generation) {
  if(document.getElementById(generation).style.display == "flex") {
    document.getElementById(generation).style.display = "none";
    document.getElementById('tooltip').style.display = "none"; }
  else
    document.getElementById(generation).style.display = "flex"; }

function toggleMenu(id) {
  if(document.getElementById('tooltip').style.display == "flex") {
    if(last_id == id) { document.getElementById('tooltip').style.display = "none"; }
    else { last_id = id; }}
  else { document.getElementById('tooltip').style.display = "flex"; last_id = id; }

   switch(id) {
     case 'hermanus':
      name.innerHTML = "Hermanus Toonen";
      birthday.innerHTML = "???";
      death.innerHTML = " - August 24th, 1807";
      parents.innerHTML = "Parents: ???";
      partner.innerHTML = "Partner: Catherine Peters Toonen (née Arts)";
      children.innerHTML = "Children: Antonia, Antonius, Petrus, Joannes, Joannes, Joanna";
      job.innerHTML = "";
      break;
    case 'catherine':
      name.innerHTML = "Catherine Peters Toonen (née Arts)";
      birthday.innerHTML = "February 9th, 1741";
      death.innerHTML = " - November 9th, 1825";
      parents.innerHTML = "Parents: ???";
      partner.innerHTML = "Partner: Hermanus Toonen";
      children.innerHTML = "Children: Antonia, Antonius, Petrus, Joannes, Joannes, Joanna";
      job.innerHTML = "";
      break;
    case 'antonia1':
      name.innerHTML = "Antonia Toonen";
      birthday.innerHTML = "May 10th, 1765";
      death.innerHTML = " - ???";
      parents.innerHTML = "Parents: Hermanus & Catherine";
      partner.innerHTML = "";
      children.innerHTML = "";
      job.innerHTML = "";
      break;
    case 'antonius':
      name.innerHTML = "Antonius Toonen";
      birthday.innerHTML = "July 8th, 1766";
      death.innerHTML = " - ???";
      parents.innerHTML = "Parents: Hermanus & Catherine";
      partner.innerHTML = "";
      children.innerHTML = "";
      job.innerHTML = "";
      break;
    case 'petrus':
      name.innerHTML = "Petrus Toonen";
      birthday.innerHTML = "August 14th, 1767";
      death.innerHTML = " - June 9th, 1852";
      parents.innerHTML = "Parents: Hermanus & Catherine";
      partner.innerHTML = "Partner: Hendrina Mathijs Toonen (née Hendriks)";
      children.innerHTML = "Children: Hermina, Mathias, Gertruy, Jan, Elisabeth, Peter, Hendricus, Arnoldus, Petronella";
      job.innerHTML = "";
      break;
    case 'hendrina':
      name.innerHTML = "Hendrina Mathijs Toonen (née Hendriks)";
      birthday.innerHTML = "August 14th, 1767";
      death.innerHTML = " - June 9th, 1852";
      parents.innerHTML = "Parents: ???";
      partner.innerHTML = "Partner: Petrus Toonen";
      children.innerHTML = "Children: Hermina, Mathias, Gertruy, Jan, Elisabeth, Peter, Hendricus, Arnoldus, Petronella";
      job.innerHTML = "";
      break;
      case 'antonia2':
        name.innerHTML = "Antonia Toonen";
        birthday.innerHTML = "March 15th, 1769";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Hermanus & Catherine";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'joannes1':
        name.innerHTML = "Joannes Toonen";
        birthday.innerHTML = "February 19th, 1771";
        death.innerHTML = " - February 28th, 1771";
        parents.innerHTML = "Parents: Hermanus & Catherine";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'joannes2':
        name.innerHTML = "Joannes Toonen";
        birthday.innerHTML = "March 28th, 1772";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Hermanus & Catherine";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'joanna':
        name.innerHTML = "Joanna Toonen";
        birthday.innerHTML = "June 25th, 1773";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Hermanus & Catherine";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
    case null:
      alert('tell marti it said null and who you clicked on');
      break;
    case '':
      alert('tell marti it said blank and who you clicked on');
      break;
  }
}
