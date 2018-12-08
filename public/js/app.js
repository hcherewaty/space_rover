'use strict';

const fillSelect = () => {
  let selectMenuArray = [];
  // selectMenuArray.push(units);
  units.forEach((value) => {
    selectMenuArray.push(value);
  })
  if ($('option').length <= 1 ) {
    selectMenuArray.forEach( (value) => {
      $('select').append(`<option value="${value}">${value}</option>`);
    })
  }
}

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

function pageLoad() {
  $(() => fillSelect());
  // let kmDistance = $('APIinfo')
}

pageLoad();