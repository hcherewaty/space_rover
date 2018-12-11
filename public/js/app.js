'use strict';

const fillMeasures = () => {
  let selectMenuArray = [];
  units.forEach((value) => {
    selectMenuArray.push(value);
  })
  // if ($('option').length <= 1 ) {
    selectMenuArray.forEach( (value) => {
      $('#units').append(`<option value="${value}">${value}</option>`);
    })
  // }
}

const fillSpeeds = () => {
  let speedMenuArray = [];
  speeds.forEach((value) => {
    speedMenuArray.push(value);
  })
  // if ($('option').length <= 1 ) {
    speedMenuArray.forEach( (value) => {
      $('#speedmenu').append(`<option value="${value}">${value}</option>`);
    })
  // }
}

let speeds = ['Conventional Rocket', 'VASIMR Ion Drive Engine', 'Walking', 'Driving', 'Dog Walking'];

let units = ['Kilometers', 'Meters', 'Miles', 'Light Years', 'Atlas the Dog (Tail to Snoot)'];

$('#units').on('change', function () {
  let $selection = $(this).val();
  if ($selection === 'Kilometers') {
    let kilometers = $('#kilometers').text();
    $('#distance').text(kilometers);
  }
  if ($selection === 'Meters'){
    let meters = $('#meters').text();
    $('#distance').text(meters);
  }
  if ($selection === 'Miles'){
    let miles = $('#miles').text();
    $('#distance').text(miles);
  }
  if ($selection === 'Light Years'){
    let lightyears = $('#lightyears').text();
    $('#distance').text(lightyears);
  }
  if ($selection === 'Atlas the Dog (Tail to Snoot)'){
    let atlas = $('#atlas').text();
    $('#distance').text(atlas);
  }
});

$('#speedmenu').on('change', function() {
  let $selection = $(this).val();
  if ($selection === 'Conventional Rocket'){
    let conventionalRocket = $('#conventional-rocket').text();
    $('#time').text(`${conventionalRocket} days`);
  }
  if ($selection === 'VASIMR Ion Drive Engine'){
    let ionRocket = $('#ion-rocket').text();
    $('#time').text(`${ionRocket} days`);
  }
  if ($selection === 'Walking'){
    let walking = $('#walking').text();
    $('#time').text(`${walking} days`);
  }
  if ($selection === 'Dog Walking'){
    let dogWalking = $('#dog-walking').text();
    $('#time').text(`${dogWalking} days`);
  }
  if ($selection === 'Driving'){
    let driving = $('#driving').text();
    $('#time').text(`${driving} days`);
  }
});


function pageLoad() {
  $(() => fillSpeeds());  
  $(() => fillMeasures());
}

pageLoad();