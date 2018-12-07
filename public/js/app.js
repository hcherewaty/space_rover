'use strict';

const fillSelect = () => {
  let selectMenuArray = ['Choose Unit of Measure'];
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

// const Conversion = function(measurement) {
//   this.km = measurement;
//   this.m = measurement * 1000;
//   this.mi = measurement * 0.621371;
//   this.au = measurement * 0.0000000000001057;
//   this.atlas = (measurement * 39370.1) / 60;
// }

$('#units').on('change', function () {
  let $selection = $(this).val();
  if ($selection === 'kilometers') {
    $('#distance').show();
  }
  if ($selection === 'meters'){
    $('#APIinfo').replaceWith(function(){
      $('#distance').text(function(i,txt) {return parseInt(txt, 10) * 1000;})
    });
  }
  // $(`.${$selection}`).show()
});

function pageLoad() {
  $(() => fillSelect());
  let kmDistance = $('APIinfo')
}

pageLoad();
