function generateButtons() {
  let numberButton = 0;
  let numberButtons = $('#numberButtons').val();
  let winner = Math.floor(Math.random() * numberButtons);
  while (numberButtons) {
    $('#listButtons').append(`
      <button type="submit" class="btn btn-secondary" style="margin:5px"
      onclick="checkButton(` + numberButton + `, ` + winner + `);">
      Click me</button>
    `);
    --numberButtons;
    ++numberButton;
  }
  document.getElementById("numberButtons").value = "";
  return false;
}

function checkButton(id, winner) {
  if (id == winner) {
    alert("This button is the winner");
  } else {
    alert("This button is not the winner");
  }
  window.location.reload();
}
