let numberButton = 0;
function generateButtons() {
  let numberButtons = $('#numberButtons').val();
  let winner = Math.floor(Math.random() * numberButtons);
  while (numberButtons) {
    $('#listButtons').append(`
      <button type="submit" class="btn btn-secondary" style="margin:5px" onclick="return randomWinner(` + numberButton + `, ` + winner + `);">Click me</button>`);
    --numberButtons;
    ++numberButton;
  }
  document.getElementById("numberButtons").value = "";
  return false;
}

function randomWinner(id, winner) {
  if (id == winner) {
    alert("This button is the winner");
  } else {
    alert("This button is not the winner");
  }
  return false;
}
