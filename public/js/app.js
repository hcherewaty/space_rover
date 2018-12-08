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

let speeds = ['conventional rocket', 'VASIMR Ion Drive Engine', 'walking', 'dog walking', 'driving'];

let units = ['kilometers', 'meters', 'miles', 'light years', 'atlas'];

$('#units').on('change', function () {
  let $selection = $(this).val();
  if ($selection === 'kilometers') {
    let kilometers = $('#kilometers').text();
    $('#distance').text(kilometers);
  }
  if ($selection === 'meters'){
    let meters = $('#meters').text();
    $('#distance').text(meters);
  }
  if ($selection === 'miles'){
    let miles = $('#miles').text();
    $('#distance').text(miles);
  }
  if ($selection === 'light years'){
    let lightyears = $('#lightyears').text();
    $('#distance').text(lightyears);
  }
  if ($selection === 'atlas'){
    let atlas = $('#atlas').text();
    $('#distance').text(atlas);
  }
});

$('#speedmenu').on('change', function() {
  let $selection = $(this).val();
  if ($selection === 'conventional rocket'){
    let conventionalRocket = $('#conventional-rocket').text();
    $('#time').text(conventionalRocket);
  }
  if ($selection === 'VASIMR Ion Drive Engine'){
    let ionRocket = $('#ion-rocket').text();
    $('#time').text(ionRocket);
  }
  if ($selection === 'walking'){
    let walking = $('#walking').text();
    $('#time').text(walking);
  }
  if ($selection === 'dog walking'){
    let dogWalking = $('#dog-walking').text();
    $('#time').text(dogWalking);
  }
  if ($selection === 'driving'){
    let driving = $('#driving').text();
    $('#time').text(driving);
  }
});


function pageLoad() {
  $(() => fillSpeeds());  
  $(() => fillMeasures());
}

pageLoad();