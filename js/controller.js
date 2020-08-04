
$(document).ready(init);

function init() {
  renderPortProj();
}

function renderPortProj() {
  var gProjTytles = getProjToDisplay();
  console.log(gProjTytles)

  strHTML = ``

  for (var i = 0; i < gProjTytles.length; i++) {
    strHTML += `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderPortModal(${i})">
                   <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                   <div class="portfolio-hover">
                   <div class="portfolio-hover-content">
                   <i class="fa fa-plus fa-3x"></i>
                   </div>
                   </div>
                   <img class="img-fluid port-img" src="${gProjTytles[i].img}" alt=""  width="">
                   </a>
                   <div class="portfolio-caption">
                   <h4 class="proj-name">${gProjTytles[i].name}</h>
                   <p class="text-muted">${gProjTytles[i].job}</p>
                   </div>
                   </div>`



  }

  var elRow = document.querySelector('.portfolio-board')
  elRow.innerHTML = strHTML
  strHTML = ``
}



function renderPortModal(idx) {
  var gProjTytles = getProjToDisplay();
  console.log(gProjTytles)

  strHTML = ``
  strHTML += `<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${gProjTytles[idx].name}</h2>
                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img class="img-fluid d-block mx-auto" src="${gProjTytles[idx].img}" alt="">
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul class="list-inline">
                      <li>Date: January 2018</li>
                      <li>Client: Threads</li>
                      <li>Category: ${gProjTytles[idx].job}</li>
                      <li><a href="${gProjTytles[idx].url}">view project</a></li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`





  var elModalBoard = document.querySelector('.modal-board')
  elModalBoard.innerHTML = strHTML
  strHTML = ``
}



function onSubmitMail(){
  var subInput = $('#e-subject').val()
  var bodyInput = $('#e-message').val()

  window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=shahar.maizel@gmail.com&su=${subInput}&body=${bodyInput}`
  window.open(url)
}





// var txt = 'Shahar Mayzel';
//   var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.querySelector('.dev-name').innerHTML += txt.charAt(i);
//     setTimeout(typeWriter, speed);
// }
// }


// function typeWriter() {
  
//   var txt = 'Lorem ipsum dummy text blabla.';
//   var speed = 50;
//   debugger;
//   if (i < txt.length) {
//     document.querySelector('.dev-name').innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};





