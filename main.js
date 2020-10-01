
window.addEventListener('load', run);

  function run() {
    clearList();
    let text = '<div class="option"></div>';
      for (let i = 0; i < 4; i++) {
        idOpcije.innerHTML += text;
      }
    };
      postaviPitanje.addEventListener('click', askQuestions);
      odustaniBtn.addEventListener('click', odustani);

      function askQuestions () {
              sound.playQuizEnd();
              sound.playQuiz();
              sound.playQuestionEnd();
              sound.playQuestion();
              sound.correctAnswerEnd();
              ponoviBtn.style.display = 'none';
              idOpcije.innerHTML = '';
              run();

            if (!quiz.end(quiz.milioner)) {
                current = quiz.getQuestion(quiz.milioner);
                h.innerHTML = current.text;
                rand = quiz.randomize(current);
                let counter = 0;
                let optionHolders = document.querySelectorAll('.option');

                let loop = setInterval(function () {
                  optionHolders[counter].innerHTML =  abcd[counter];
                  optionHolders[counter].innerHTML += rand[counter];
                  counter++;
                  if (counter == 4) {
                    clearInterval(loop);
                      if (br1 === 0) {
                        polaPolaBtn.addEventListener('click', polaPola);
                      }else {
                        polaPolaBtn.removeEventListener('click', polaPola);
                      }
                      if (br2 === 0) {
                        pomocPrijateljaBtn.addEventListener('click', pomocPrijatelja);
                      }else {
                        pomocPrijateljaBtn.removeEventListener('click', pomocPrijatelja);
                      }
                      if (br3 === 0) {
                        pomocPublikeBtn.addEventListener('click', pomocPublike);
                      }else {
                        pomocPublikeBtn.removeEventListener('click', pomocPublike);
                      }
                  }
                },100)

              for (let i = 0; i < optionHolders.length; i++) {
                    optionHolders[i].addEventListener('click',clickForAnswer);
                  };

              function clickForAnswer() {
                        brojac++;
                        this.style.background = 'orange';
                        this.style.color = 'black';
                        this.children[0].style.color = 'black';
                        quiz.answers(this,current);

                        if (quiz.error === 1) {
                            postaviPitanje.removeEventListener('click', askQuestions);
                        }

                        for (let i = 0; i < bingo.length; i++) {
                            bingo[i].style.background = '#000d33';
                            bingo[i].style.color = 'gold';
                        }

                        for (var i = 0; i < zaSum.length; i++) {
                          zaSum[i].style.color = 'white';
                        }

                        if (this.children[0].innerHTML == current.answer) {
                          for (let i = 0; i < optionHolders.length; i++) {
                                optionHolders[i].removeEventListener('click',clickForAnswer);
                              };
                                sound.correctAnswer();
                                document.querySelector('#pt'+brojac).style.background = 'orange';
                                document.querySelector('#pt'+brojac).style.color = 'black';
                                this.style.background = 'green';

                                if (brojac == 15) {
                                  osvojiliSte.style.display = 'block';
                                  osvojenaSuma.innerHTML = '3.000.000' +' rsd';
                                  osvojenaSuma.style.display = 'block';
                                  ukupnoPoena.style.display = 'block';
                                  ukupnoPoena.innerHTML = quiz.score + ' poena';
                                  repeat();
                                  postaviPitanje.style.display = 'none';
                                }

                        }else {
                          for (let i = 0; i < optionHolders.length; i++) {
                                optionHolders[i].removeEventListener('click',clickForAnswer);
                              };
                                sound.errorAnswer();
                                brojac -= 1;
                                document.querySelector('#pt'+brojac).style.background = 'orange';
                                document.querySelector('#pt'+brojac).style.color = 'black';
                                postaviPitanje.style.display = 'none';
                                zagarantovanaSuma();
                                repeat();
                        }
                        points.innerHTML = quiz.score;
                      }
                      }else {
                        repeat();
                    };

        function zagarantovanaSuma() {
            osvojiliSte.style.display = 'block';
            osvojenaSuma.style.display = 'block';
            ukupnoPoena.style.display = 'block';
            ukupnoPoena.innerHTML = quiz.score + ' poena';
          if (brojac >= 5) {
              osvojiliSte.style.display = 'block';
              osvojenaSuma.innerHTML = '3.000' +' rsd';
              osvojenaSuma.style.display = 'block';
              ukupnoPoena.innerHTML = quiz.score + ' poena';
              ukupnoPoena.style.display = 'block';
          }else {
              osvojiliSte.style.display = 'block';
              osvojenaSuma.innerHTML = '0' +' rsd';
              osvojenaSuma.style.display = 'block';
              ukupnoPoena.style.display = 'block';
              ukupnoPoena.innerHTML = quiz.score + ' poena';
          }

          if (brojac >= 10) {
            osvojiliSte.style.display = 'block';
            osvojenaSuma.innerHTML = '96.000' +' rsd';
            osvojenaSuma.style.display = 'block';
            ukupnoPoena.style.display = 'block';
            ukupnoPoena.innerHTML = quiz.score + ' poena';
          }
        };
  };

  // function repeat() {
  //   polaPolaBtn.children[0].setAttribute('src','sl/img1.png');
  //   pomocPrijateljaBtn.children[0].setAttribute('src','sl/img2.png');
  //   pomocPublikeBtn.children[0].setAttribute('src','sl/img3.png');
  //   ponoviBtn.style.display = 'block';
  //   ponoviBtn.onclick = run;
  //   idOpcije.innerHTML = '';
  //   h.innerHTML = '';
  //   brojac = 0;
  //   br1 = 0;
  //   br2 = 0;
  //   br3 = 0;
  //   quiz.index = 0;
  //   quiz.score = 0;
  //   quiz.error = 0;
  //
  //   for (let i = 0; i < bingo.length; i++) {
  //     bingo[i].style.background = '#000d33';
  //     bingo[i].style.color = 'gold';
  //   }
  //   for (let i = 0; i < zaSum.length; i++) {
  //     zaSum[i].style.color = 'white';
  //   }
  //   for (var i = 0; i < col.length; i++) {
  //     col[i].innerHTML = '';
  //   }
  //   postaviPitanje.addEventListener('click', askQuestions);
  // };
  //
  // function odustani() {
  //   sound.playQuestionEnd();
  //   sound.final();
  //   osvojiliSte.style.display = 'block';
  //   osvojenaSuma.innerHTML = document.querySelector('#pt'+brojac).children[0].innerHTML + ' rsd';
  //   postaviPitanje.style.display = 'none';
  //   osvojenaSuma.style.display = 'block';
  //   ukupnoPoena.innerHTML = quiz.score + ' poena';
  //   ukupnoPoena.style.display = 'block';
  //   repeat();
  // };
  //
  // function clearList() {
  //   postaviPitanje.style.display = 'block';
  //   osvojenaSuma.style.display = 'none';
  //   ukupnoPoena.style.display = 'none';
  //   osvojiliSte.style.display = 'none';
  //
  //   for (var i = 0; i < zaSum.length; i++) {
  //     zaSum[i].style.color = 'white';
  //   }
  // };
