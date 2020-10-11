	var str = "";
var vote_count = {
	Briones : 0,
	Cimatu : 0,
	Duque : 0,
	Locsin : 0,
	Honasan : 0,
	Año : 0,
	Lorenzana : 0,
	Tugade : 0,
	Guevarra : 0,
	Lopez : 0,
};

$(document).ready(
	function(){
		$("#div1").click(
			function(){
				vote_count.Briones++;
				$("#p1vote").html(vote_count.Briones);
			}
		);
		$("#div2").click(
			function(){
				vote_count.Cimatu++;
				$("#p2vote").html(vote_count.Cimatu);
			}
		);
		$("#div3").click(
			function(){
				vote_count.Duque++;
				$("#p3vote").html(vote_count.Duque);
			}
		);
		$("#div4").click(
			function(){
				vote_count.Locsin++;
				$("#p4vote").html(vote_count.Locsin);
			}
		);
		$("#div5").click(
			function(){
				vote_count.Honasan++;
				$("#p5vote").html(vote_count.Honasan);
			}
		);
		$("#div6").click(
			function(){
				vote_count.Año++;
				$("#p6vote").html(vote_count.Año);
			}
		);
		$("#div7").click(
			function(){
				vote_count.Lorenzana++;
				$("#p7vote").html(vote_count.Lorenzana);
			}
		);
		$("#div8").click(
			function(){
				vote_count.Tugade++;
				$("#p8vote").html(vote_count.Tugade);
			}
		);
		$("#div9").click(
			function(){
				vote_count.Guevarra++;
				$("#p9vote").html(vote_count.Guevarra);
			}
		);
		$("#div10").click(
			function(){
				vote_count.Lopez++;
				$("#p10vote").html(vote_count.Lopez);
			}
		);
	}
);