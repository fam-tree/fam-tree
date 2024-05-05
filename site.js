var name = document.getElementById('name');
var birthday = document.getElementById('birthday');
var job = document.getElementById('occupation');
var death = document.getElementById('deceased');
var partner = document.getElementById('partner');
var children = document.getElementById('children');
var parents = document.getElementById('parents');

var clicks = 0;

var toonens = document.getElementsByClassName('toonen');
var vandenelsens = document.getElementsByClassName('vandenelsen');
var underhills = document.getElementsByClassName('underhills');

function toggleRow(generation) {
  if(document.getElementById(generation).style.display == "flex") {
    document.getElementById(generation).style.display = "none";
    document.getElementById('tooltip').style.display = "none"; }
  else
    document.getElementById(generation).style.display = "flex"; }

function sortFamily() {
  var sortbutton = document.getElementById('sort');

  switch(clicks) {
    case 0: // default
      sortbutton.innerHTML = "Sort Family";
      clicks++;
      for(i = 0; i < toonens.length; i++)
        toonens[i].style.display = "flex";
      for(i = 0; i < vandenelsens.length; i++)
        vandenelsens[i].style.display = "flex";
      for(i = 0; i < underhills.length; i++)
        underhills[i].style.display = "flex;"
      break;
    case 1: // toonens
      sortbutton.innerHTML = "Toonens";
      clicks++;
      for(i = 0; i < toonens.length; i++)
        toonens[i].style.display = "flex";
      for(i = 0; i < vandenelsens.length; i++)
        vandenelsens[i].style.display = "none";
      for(i = 0; i < underhills.length; i++)
        underhills[i].style.display = "none;"
      break;
    case 2: // van den elsens
      sortbutton.innerHTML = "van den Elsens";
      clicks++;
      for(i = 0; i < toonens.length; i++)
        toonens[i].style.display = "none";
      for(i = 0; i < vandenelsens.length; i++)
        vandenelsens[i].style.display = "flex";
      for(i = 0; i < underhills.length; i++)
        underhills[i].style.display = "none;"
      break;
    case 3: // underhills
      sortbutton.innerHTML = "Underhills";
      clicks = 0;
      for(i = 0; i < toonens.length; i++)
        toonens[i].style.display = "none";
      for(i = 0; i < vandenelsens.length; i++)
        vandenelsens[i].style.display = "none";
      for(i = 0; i < underhills.length; i++)
        underhills[i].style.display = "flex;"
      break;
    case 5:
      alert('uh oh, marti did the code bad');
      break;
  } }


function toggleMenu(id) {
  if(document.getElementById('tooltip').style.display == "flex") {
    if(last_id == id) {
      document.getElementById('tooltip').style.display = "none";
      document.getElementById('background').style.display = "none"; }
    else { last_id = id; }}
  else {
    document.getElementById('tooltip').style.display = "flex";
    document.getElementById('background').style.display = "block";
    last_id = id; }

   switch(id) {
     case 'hermanus':
      name.innerHTML = "Hermanus Toonen";
      birthday.innerHTML = "???";
      death.innerHTML = " - August 24th, 1807";
      parents.innerHTML = "";
      partner.innerHTML = "Partner: Catherine Peters Arts Toonen";
      children.innerHTML = "Children: Antonia, Antonius, Petrus, Joannes, Joannes, Joanna";
      job.innerHTML = "";
      break;
    case 'catherine':
      name.innerHTML = "Catherine Peters Arts Toonen";
      birthday.innerHTML = "February 9th, 1741";
      death.innerHTML = " - November 9th, 1825";
      parents.innerHTML = "";
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
    case 'antonius1':
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
      parents.innerHTML = "";
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
      case 'maria1':
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
      case 'mietja':
        name.innerHTML = "Mietja (Maria) Hendriks (née Toonen)";
        birthday.innerHTML = "March 5th, 1928";
        death.innerHTML = " - ??? (Ovarian Cancer)";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "Partner: Ben Hendriks (September 20th, 1928 - June 16th, 2010; married April 5th, 1956)";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'nelly':
        name.innerHTML = "Nelly Hendriks (née Toonen)";
        birthday.innerHTML = "March 5th, 1928";
        death.innerHTML = " - February 5th, 2005 (Stroke)";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "Partner: Martien Hendriks (January 13th, 1926 - January 9th, 2016)";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'gerrit':
        name.innerHTML = "Gerrit Toonen";
        birthday.innerHTML = "July 30th, 1929";
        death.innerHTML = " - August 30th, 2007 (Tainted Blood Fusion Resulting in Inoperable Prostate Cancer)";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "Partner: Truus Toonen (née Hendriks) March 25th, 1933 - ???";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'sjef':
        name.innerHTML = "Sjef Toonen";
        birthday.innerHTML = "March 3rd, 1931";
        death.innerHTML = " - November 8th, 2020 (Natural Causes)";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'thijs':
        name.innerHTML = "Thijs Toonen";
        birthday.innerHTML = "August 29th, 1932";
        death.innerHTML = " - September 12th, 2021 (Natural Causes)";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'john':
        name.innerHTML = "Johannes (John/Jan) Marcus Theodorus Toonen";
        birthday.innerHTML = "April 25th, 1934";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Martinus & Antonia";
        partner.innerHTML = "Partner: Corry Toonen (née van den Elsen, married April 5th, 1956); Joanne Toonen (née , married )";
        children.innerHTML = "Children: Marty, Garry, Janice, Andy, Carol, Anita, Annette";
        job.innerHTML = "Farmer";
        break;
      case 'corry':
        name.innerHTML = "Cornelia (Corry) Catherina Josepha Toonen (née van den Elsen)";
        birthday.innerHTML = "November 28th, 1934";
        death.innerHTML = " - August 2nd, 1996 (Breast Cancer)";
        parents.innerHTML = "Parents: Gerardus & Adriana";
        partner.innerHTML = "Partner: John Toonen (married April 5th, 1956)";
        children.innerHTML = "Children: Marty, Garry, Janice, Andy, Carol, Anita, Annette";
        job.innerHTML = "";
        break;
      case 'marty':
        name.innerHTML = "Martien (Marty) Toonen";
        birthday.innerHTML = "March 16th, 1957";
        death.innerHTML = " - January 11th, 1978 (Leukemia)";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Lori Andress (born June 11th, 1957; married )";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'garry':
        name.innerHTML = "Garry Toonen";
        birthday.innerHTML = "August 15th, 1958";
        death.innerHTML = "";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Brenda Toonen (née Anger; married )";
        children.innerHTML = "Children: John, Kerry, Jessie";
        job.innerHTML = "Sonographer";
        break;
      case 'brenda':
        name.innerHTML = "Brenda Toonen (née Anger)";
        birthday.innerHTML = "March 21st, 1958";
        death.innerHTML = "";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Garry Toonen";
        children.innerHTML = "Children: John, Kerry, Jessie";
        job.innerHTML = "Nurse";
        break;
      case 'janice':
        name.innerHTML = "Janice Matejcek (née Toonen)";
        birthday.innerHTML = "July 26th, 1959";
        death.innerHTML = " - September 23rd, 2000 (Car Accident)";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Randy Matejcek (married )";
        children.innerHTML = "Children: Shaun, Teegan, Garrett";
        job.innerHTML = "Accountant";
        break;
      case 'randy':
        name.innerHTML = "Randy Matejcek";
        birthday.innerHTML = "November 25th, 1959";
        death.innerHTML = " - May 22nd, 2002 (Suicide)";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Randy Matejcek (married )";
        children.innerHTML = "Children: Shaun, Teegan, Garrett";
        job.innerHTML = "Farmer";
        break;
      case 'andy':
        name.innerHTML = "Anthony (Andy) Peter Toonen";
        birthday.innerHTML = "February 5th, 1961";
        death.innerHTML = "";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Kim Kicksee (born September 24th, 1961; divorced); Kathi Lynn Underhill";
        children.innerHTML = "Children: Brock, Marti, Annie";
        job.innerHTML = "Farmer";
        break;
      case 'kathi':
        name.innerHTML = "Kathi Lynn Underhill";
        birthday.innerHTML = "August 4th, 1961";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Charlie & Bernadine";
        partner.innerHTML = "Partner: Andy Toonen";
        children.innerHTML = "Children: Brock, Marti, Annie";
        job.innerHTML = "";
        break;
      case 'carol':
        name.innerHTML = "Carol Groeneveld (née Toonen)";
        birthday.innerHTML = "August 21st, 1962";
        death.innerHTML = "";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Paul Groeneveld (born April 18th, 1959; married )";
        children.innerHTML = "";
        job.innerHTML = "Accountant";
        break;
      case 'anita':
        name.innerHTML = "Anita Whitworth (née Toonen)";
        birthday.innerHTML = "February 18th, 1963";
        death.innerHTML = "";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Steve Whitworth (born March 6th, 1963; married )";
        children.innerHTML = "";
        job.innerHTML = "Pharmacist";
        break;
      case 'annette':
        name.innerHTML = "Annette Toonen";
        birthday.innerHTML = "February 18th, 1963";
        death.innerHTML = "";
        parents.innerHTML = "Parents: John & Corry";
        partner.innerHTML = "Partner: Mark Littell (divorced)";
        children.innerHTML = "";
        job.innerHTML = "Pharmacist";
        break;
      case 'shaun':
        name.innerHTML = "Shaun Matejcek";
        birthday.innerHTML = "April 16th, 1980";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Randy & Janice";
        partner.innerHTML = "Partner: Jen Lados (married )";
        children.innerHTML = "Children: Alice, Oliver";
        job.innerHTML = "";
        break;
      case 'jen':
        name.innerHTML = "Jen Lados";
        birthday.innerHTML = "March 1st, ";
        death.innerHTML = "";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Shaun Toonen (married )";
        children.innerHTML = "Children: Alice, Oliver";
        job.innerHTML = "";
        break;
      case 'jon':
        name.innerHTML = "Jon Toonen";
        birthday.innerHTML = "August 15th, ";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Garry & Brenda";
        partner.innerHTML = "Partner: Joanna Wesolowski (born February 8th, ; )";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'teegan':
        name.innerHTML = "Teegan (née Matejcek?)";
        birthday.innerHTML = "February 1st, 1985";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Randy & Janice";
        partner.innerHTML = "Partner: ";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'brock':
        name.innerHTML = "Brock Toonen";
        birthday.innerHTML = "November 5th, 1986";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Andy & Kim";
        partner.innerHTML = "Partner: Alissa Wilson (married October 27th, 2018)";
        children.innerHTML = "Children: Shyla, Grace";
        job.innerHTML = "";
        break;
      case 'alissa':
        name.innerHTML = "Alissa Toonen (née Wilson)";
        birthday.innerHTML = "";
        death.innerHTML = "";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Brock Toonen (married October 27th, 2018)";
        children.innerHTML = "Children: Shyla, Grace";
        job.innerHTML = "";
        break;
      case 'kerry':
        name.innerHTML = "Kerry (née Toonen?)";
        birthday.innerHTML = "May 21st, ";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Garry & Brenda";
        partner.innerHTML = "Partner: Hyunsoo Kim (born ; married )";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'jesse':
        name.innerHTML = "Jesse (née Toonen?)";
        birthday.innerHTML = "April 18th, ";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Garry & Brenda";
        partner.innerHTML = "Partner: Tom Higson (born ; married )";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'garrett':
        name.innerHTML = "Garrett Matejcek";
        birthday.innerHTML = "January 9th, 1990";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Randy & Janice";
        partner.innerHTML = "Partner: Donna Langel (born )";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'marti':
        name.innerHTML = "Marti Toonen";
        birthday.innerHTML = "September 4th, 1995";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Andy & Kathi";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'annie':
        name.innerHTML = "Annie Toonen";
        birthday.innerHTML = "December 4th, 1999";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Andy & Kathi";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'shyla':
        name.innerHTML = "Shyla Toonen";
        birthday.innerHTML = "October 1st, 2009";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Brock & Alissa";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'alice':
        name.innerHTML = "Alice Matejcek";
        birthday.innerHTML = "";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Shaun & Jen";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'grace':
        name.innerHTML = "Grace Toonen";
        birthday.innerHTML = "June 8th, 20";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Brock & Alissa";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'oliver':
        name.innerHTML = "Oliver Matejcek";
        birthday.innerHTML = "";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Shaun & Jen";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'shaylynn':
        name.innerHTML = "Shaylynn";
        birthday.innerHTML = "";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Jesse & Tom";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'june':
        name.innerHTML = "June";
        birthday.innerHTML = "";
        death.innerHTML = "";
        parents.innerHTML = "Parents: Jesse & Tom";
        partner.innerHTML = "";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
      case 'antonius2':
        name.innerHTML = "Antonius Thonis";
        birthday.innerHTML = "September 18th, 1733";
        death.innerHTML = " - May 3rd, 1804";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Maria Hendrick Lamberts van den Crommenacker";
        children.innerHTML = "Children: Joannes Wilhelmus, Andries";
        job.innerHTML = "";
        break;
      case 'maria2':
        name.innerHTML = "Maria Hendrick Lamberts van den Crommenacker";
        birthday.innerHTML = "February 7th, 1737";
        death.innerHTML = " - May 29th, 1781";
        parents.innerHTML = "";
        partner.innerHTML = "Partner: Antonius Thonis";
        children.innerHTML = "";
        job.innerHTML = "";
        break;
    case 'joannes3':
      name.innerHTML = "Joannes Wilhelmus (Jan Willem) Thonis";
      birthday.innerHTML = "September 26th, 1757";
      death.innerHTML = " - February 20th, 1847";
      parents.innerHTML = "Parents: Antonius & Maria";
      partner.innerHTML = "Partner: Anna Maria Ansems Smits (December 17th, 1760 - November 4th, 1826)";
      children.innerHTML = "";
      job.innerHTML = "";
      break;
    case 'andries':
      name.innerHTML = "Andries Thonis";
      birthday.innerHTML = "October 29th, 1769";
      death.innerHTML = " - February 19th, 1849";
      parents.innerHTML = "Parents: Antonius & Maria";
      partner.innerHTML = "Partner: Anna Maria Slits";
      children.innerHTML = "Children: Antonij, Petronella";
      job.innerHTML = "";
      break;
    case 'anna':
      name.innerHTML = "Anna Maria Slits";
      birthday.innerHTML = "November 14th, 1770";
      death.innerHTML = " - March 13th, 1833";
      parents.innerHTML = "";
      partner.innerHTML = "Partner: Andries Thonis";
      children.innerHTML = "Children: Antonij, Petronella";
      job.innerHTML = "";
      break;
    case null:
      alert('tell marti it said null and who you clicked on');
      break;
    case '':
      document.getElementById('tooltip').style.display = "none";
      document.getElementById('background').style.display = "none";
      break;
  }
}
