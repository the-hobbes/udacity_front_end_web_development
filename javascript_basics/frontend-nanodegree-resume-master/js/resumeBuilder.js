/* $('#main').append(['Phelan']);
var awesomeThoughts = "These are some awesome thoughts";
var funThoughts = awesomeThoughts.replace('awesome', 'fun');
console.log(funThoughts);
$('body').append([funThoughts]);
*/

var formattedName = HTMLheaderName.replace('%data%', 'Phelan Vendeville');
var formattedRole = HTMLheaderRole.replace('%data%', 'Full-stack developer');

$('#header').prepend(formattedName);
$('#header').append(formattedRole);
