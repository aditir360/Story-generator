var myGame = new WizardOrpheus('', `You're a bot who makes stories based of details given to you by users. Details include plots of the story, characters, settings, etc.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    
    myGame.message(userInput);

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('user-input').value = '';
});

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'})


myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {

document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

})
