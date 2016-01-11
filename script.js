$(document).ready(function() {

  var teamDone = false;

  // creation class Hat qui crée les équipes

  var Hat = function() {
    var students = ["Karine", "Jousna", "Jeanne d'arc", "Sarah", "Juliette", "Nadege", "Yannic", "Yannick", "Jerome", "Florent", "KevinL", "KevinC", "Ahmed", "Flavien", "Abdel-malik", "Ryad", "Marc", "Anthony", "Bruno", "Simon", "Adel", "Mohamed"];

    // Method pour creer une seul équipe
    this.chance = function(nb, studTmp) {
      var newTeam = [];
      var studTmp2 = students.slice(0);
      for (var i = 0; i < nb; i++) {
        if (studTmp) {
          var index = Math.floor(Math.random() * (studTmp.length - 1));
          newTeam.push(studTmp.splice(index, 1).join());
        } else {
          var index = Math.floor(Math.random() * (studTmp2.length - 1));
          newTeam.push(studTmp2.splice(index, 1).join());
        }
      }
      return studTmp ? [newTeam, studTmp] : newTeam;
    };

    // Method pour creer toute les équipe possible
    this.team = function(nb) {
      var newTeams = [];
      var nbTeam = Math.floor(students.length / nb);
      var studTmp = students.slice(0);

      for (var i = 0; i < nbTeam; i++) {
        var tmp = this.chance(nb, studTmp);
        newTeams.push(tmp[0]);
        studTmp = tmp[1];
      }
      return [newTeams, studTmp];
    }

  };




  // Gestion de la relation avec le formulaire


  // Quand on ne veut qu'une équipe a la fois
  $('.chance').on("click", function(e) {
    e.preventDefault();
    $('.resultat').show();
    if(teamDone) $('.resultat').empty();
    teamDone = false;

    var myTeams = new Hat();
    var nombre = $('.nb').val();
    var res = myTeams.chance(nombre);
    var rand = Math.floor(Math.random() * 1000);

    $('.resultat').append('<ul class="' + rand + '">');
    res.map(function(a) {
      $('.resultat .' + rand).append('<li>' + a + '</li>');
    });
  });


// Quand on veut generer toute les équipe possible

  $('.teamBtn').on("click", function(e) {
    teamDone = true;
    e.preventDefault();
    $('.resultat').show();
    $('.resultat').empty();

    var myTeams = new Hat();
    var nombre = $('.nb').val();
    var res = myTeams.team(nombre);


    for (var i = 0; i < res[0].length; i++) {
      var rand = Math.floor(Math.random() * 1000);
      $('.resultat').append('<ul class="' + rand + '">');
      res[0][i].map(function(a) {
        $('.resultat .' + rand).append('<li>' + a + '</li>');
      });
    }
      var rand = Math.floor(Math.random() * 1000);
      $('.resultat').append('<ul class="' + rand + '">');
      res[1].map(function(a) {
        $('.resultat .' + rand).append('<li>' + a + '</li>');
      });

  });

  var bidule = new Hat();

  console.log(bidule.chance(4));
  var equipe = bidule.team(3)
  console.log(equipe[0]);
  console.log(equipe[1]);



});
