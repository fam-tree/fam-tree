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
      case 'hermina':
        name.innerHTML = "Hermina Reyen (née Toonen)";
        birthday.innerHTML = "September 20th, 1809";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Egbertus Reyen";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'mathias':
        name.innerHTML = "Mathias Toonen";
        birthday.innerHTML = "December 7th, 1810";
        death.innerHTML = " - May 7th, 1882";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Gertruda Toonen (née Willems)";
        children.innerHTML = "Children: Gerardus";
        job.innerHTML = "";
        break;
      case 'gertruda1':
        name.innerHTML = "Gertruda Toonen (née Willems)";
        birthday.innerHTML = "August 8, 1813";
        death.innerHTML = " - March 23rd, 1879";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Mathias Toonen";
        children.innerHTML = "Children: Gerardus";
        job.innerHTML = "";
        break;
      case 'gertruy':
        name.innerHTML = "Gertruy Toonen";
        birthday.innerHTML = "March 29th, 1812 - February 9th, 1813";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'jan':
        name.innerHTML = "Jan Toonen";
        birthday.innerHTML = "September 29th, 1813";
        death.innerHTML = " - October 21st, 1891";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Elisabeth Toonen (née Gerits) April 13th, 1822 - July 2nd, 1917";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'elisabeth':
        name.innerHTML = "Elisabeth Beelen (née Toonen)";
        birthday.innerHTML = "November 8th, 1817";
        death.innerHTML = " - December 24th, 1817";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Martinus Beelen";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'peter':
        name.innerHTML = "Peter Toonen";
        birthday.innerHTML = "November 10th, 1820";
        death.innerHTML = " - March 10th, 1848";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'hendricus':
        name.innerHTML = "Hendricus Toonen";
        birthday.innerHTML = "February 9th, 1823";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Egberdina Toonen (née Arts) November 30th, 1835 - April 25th, 1913";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'arnoldus':
        name.innerHTML = "Arnoldus Toonen";
        birthday.innerHTML = "February 9th, 1823";
        death.innerHTML = " - January 1st, 1886";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "Partner: Maria Toonen (née van den Oever)";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'petronella':
        name.innerHTML = "Petronella Toonen";
        birthday.innerHTML = "October 2nd, 1826";
        death.innerHTML = " - May 23rd, 1844";
        parents.innerHTML = "Parents: Petrus & Hendrina";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'gerardus':
        name.innerHTML = "Gerardus Toonen";
        birthday.innerHTML = "August 16th, 1946";
        death.innerHTML = " - March 6th, 1929";
        parents.innerHTML = "Parents: Mathias & Gertruda";
        partner.innerHTML = "Partner: Maria Anna Toonen (née Schraven)";
        children.innerHTML = "Children: Gertruda, Henricus, Mathijs, Mathijs, Martinus";
        job.innerHTML = "";
        break;
      case 'maria':
        name.innerHTML = "Maria Anna Toonen (née Schraven)";
        birthday.innerHTML = "July 27th, 1850";
        death.innerHTML = " - ???";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Gerardus Toonen";
        children.innerHTML = "Children: Gertruda, Henricus, Mathijs, Mathijs, Martinus";
        job.innerHTML = "";
        break;
      case 'gertruda2':
        name.innerHTML = "Gertruda Toonen";
        birthday.innerHTML = "March 19th, 1878";
        death.innerHTML = " - ???";
        parents.innerHTML = "Parents: Gerardus & Maria";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'henricus':
        name.innerHTML = "Henricus Toonen";
        birthday.innerHTML = "June 11th, 1879";
        death.innerHTML = " - December 22nd, 1886";
        parents.innerHTML = "Parents: Gerardus & Maria";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'mathijs1':
        name.innerHTML = "Mathijs Toonen";
        birthday.innerHTML = "March 22nd, 1881";
        death.innerHTML = " - March 24th, 1881";
        parents.innerHTML = "Parents: Gerardus & Maria";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'mathijs2':
        name.innerHTML = "Mathijs Toonen";
        birthday.innerHTML = "April 20th, 1882";
        death.innerHTML = " - September 9th, 1958";
        parents.innerHTML = "Parents: Gerardus & Maria";
        partner.innerHTML = "Partner: Gerdina Toonen (née Roeffen) February 23rd, 1883 - February 19th, 1956";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'martinus':
        name.innerHTML = "Martinus Toonen";
        birthday.innerHTML = "June 23rd, 1884";
        death.innerHTML = " - February 19th, 1956";
        parents.innerHTML = "Parents: Gerardus & Maria";
        partner.innerHTML = "Partner: Antonia Toonen (née Jakobs)";
        children.innerHTML = "Children: Mietja, Nelly, Gerrit, Sjef, Thijs, Johannes, Martien, Truus";
        job.innerHTML = "";
        break;
      case 'antonia3':
        name.innerHTML = "Antonia Toonen (née Jakobs)";
        birthday.innerHTML = "October 6th, 1895";
        death.innerHTML = " - October 18th, 1970";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Martinus Toonen";
        children.innerHTML = "Children: Mietja, Nelly, Gerrit, Sjef, Thijs, Johannes, Martien, Truus";
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
