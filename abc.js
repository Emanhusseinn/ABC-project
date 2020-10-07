
console.log('hiii')

$('#firstBu').click(function(){
	$("#quiz").css("display", "block")
	$('body').css("background-color", "yellow")
	$('#firstDiv').css("display", "none")
})



var myquestions = [{
	// A
	Q:'Q1- which letter does the word "apple" starts with?:',
	A: 'C3',
	C: ["1.C","2.B","3.A"]
},

{
	// B
	Q:'Q2- which letter does the word "butterfly" starts with?:',
	A: 'C1',
	C: ["1.B","2.V","3.U"]

},

{
	// C
	Q:'Q3- which letter does the word "corn" starts with?:',
	A: 'C3',
	C: ["1.F","2.G","3.C"]

},

{
	// D
	Q:'Q4- which letter does the word "donuts" starts with?:',
	A: 'C2',
	C: ["1.L","2.D","3.P"]

},

{
	// E
	Q:'Q5- which letter does the word "elephants" starts with?:',
	A: 'C2',
	C: ["1.H","2.E","3.M"]

},

{
	// F
	Q:'Q6- which letter does the word "fire" starts with?:',
	A: 'C1',
	C: ["1.F","2.R","3.E"]

},

{
	// G
	Q:'Q7- which letter does the word "giraffe" starts with?:',
	A: 'C3',
	C: ["1.S","2.RT","3.G"]

},

{
	// H
	Q:'Q8- which letter does the word "elephants" starts with?:',
	A: 'C3',
	C: ["1.F","2.R","3.H"]

},

{
	// I
	Q:'Q9- which letter does the word "ice" starts with?:',
	A: 'C2',
	C: ["1.X","2.I","3.N"]

},

{
	// J
	Q:'Q10- which letter does the word "jacket" starts with?:',
	A: 'C2',
	C: ["1.L","2.J","3.K"]

},

{
	// K
	Q:'Q11- which letter does the word "key" starts with?:',
	A: 'C1',
	C: ["1.K","2.R","3.O"]

},

{
	// L
	Q:'Q12- which letter does the word "lamp" starts with?:',
	A: 'C2',
	C: ["1.W","2.L","3.B"]

},

{
	// M
	Q:'Q13- which letter does the word "milk" starts with?:',
	A: 'C1',
	C: ["1.M","2.R","3.P"]

},

{
	// N
	Q:'Q14- which letter does the word "nail" starts with?:',
	A: 'C2',
	C: ["1.C","2.N","3.Q"]

},

{
	// O
	Q:'Q15- which letter does the word "octopus" starts with?:',
	A: 'C2',
	C: ["1.F","2.O","3.D"]

},

{
	// P
	Q:'Q16- which letter does the word "pen" starts with?:',
	A: 'C2',
	C: ["1.D","2.P","3.B"]

},

{
	// Q
	Q:'Q17- which letter does the word "queen" starts with?:',
	A: 'C3',
	C: ["1.V","2.R","3.Q"]

},

{
	// R
	Q:'Q18- which letter does the word "rabbit" starts with?:',
	A: 'C2',
	C: ["1.F","2.R","3.Z"]

},

{
	// S
	Q:'Q19- which letter does the word "sun" starts with?:',
	A: 'C1',
	C: ["1.S","2.U","3.O"]

},

{
	// T
	Q:'Q20- which letter does the word "tomato" starts with?:',
	A: 'C1',
	C: ["S.F","2.T","3.C"]

},

{
	// U
	Q:'Q21- which letter does the word "uncle" starts with?:',
	A: 'C2',
	C: ["1.T","2.U","3.E"]

},

{
	// V
	Q:'Q22- which letter does the word "van" starts with?:',
	A: 'C2',
	C: ["1.N","2.V","3.K"]

},

{
	// W
	Q:'Q23- which letter does the word "water" starts with?:',
	A: 'C1',
	C: ["1.W","2.R","3.E"]

},

{
	// X
	Q:'Q24- which letter does the word "X-ray" starts with?:',
	A: 'C3',
	C: ["1.S","2.T","3.X"]

},

{
	// Y
	Q:'Q25- which letter does the word "yellow" starts with?:',
	A: 'C2',
	C: ["1.I","2.Y","3.J"]

},

{
	// Z
	Q:'Q26- which letter does the word "zoo" starts with?:',
	A: 'C1',
	C: ["1.Z","2.B","3.D"]

}

]


// i was gonna make a for loop to itirate over my array but didn't knew how
//getting the questions 
$('#Q1').text(myquestions[0].Q);
$('#Q2').text(myquestions[1].Q);
$('#Q3').text(myquestions[2].Q);
$('#Q4').text(myquestions[3].Q);
$('#Q1').text(myquestions[4].Q);
$('#Q1').text(myquestions[5].Q);
$('#Q1').text(myquestions[6].Q);
$('#Q1').text(myquestions[7].Q);
$('#Q1').text(myquestions[8].Q);
$('#Q1').text(myquestions[9].Q);
$('#Q1').text(myquestions[10].Q);
$('#Q1').text(myquestions[11].Q);
$('#Q1').text(myquestions[12].Q);
$('#Q1').text(myquestions[13].Q);
$('#Q1').text(myquestions[14].Q);
$('#Q1').text(myquestions[15].Q);
$('#Q1').text(myquestions[16].Q);
$('#Q1').text(myquestions[17].Q);
$('#Q1').text(myquestions[18].Q);
$('#Q1').text(myquestions[19].Q);
$('#Q1').text(myquestions[20].Q);
$('#Q1').text(myquestions[21].Q);
$('#Q1').text(myquestions[22].Q);
$('#Q1').text(myquestions[23].Q);
$('#Q1').text(myquestions[24].Q);
$('#Q1').text(myquestions[25].Q);
$('#Q1').text(myquestions[26].Q);


