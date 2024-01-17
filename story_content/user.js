function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ajzcBW8mJE":
        Script1();
        break;
      case "5vz7eNkslBY":
        Script2();
        break;
      case "6djSb6AOVRh":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
const userprompt01value = player.GetVar("userprompt01");

var messages = []

var system_message = { role: "system", content: "You are a helpful and intelligent chatbot." };
var user_prompt01 = { role: "user", content: `${userprompt01value}` };

messages.push(system_message);
messages.push(user_prompt01);

async function openai_req() {
	fetch('https://19a2-103-144-175-207.ngrok-free.app/letschat', {
		method:'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: JSON.stringify({ messages })
	})
	
	.then(res => res.json())
	.then(data => {
		//console.log(data);
		var gpt_content = data.data.choices[0].message.content;
		gpt_content = gpt_content.trim();
		player.SetVar("gptresponse01", gpt_content);
	})
	.catch(error=>{
		console.error('Error fetching data:', error);
	})
};

openai_req();
}

function Script2()
{
  var thescrollbar = document.querySelector('.scrollarea-area.is-scrollable');
thescrollbar.scrollTop = thescrollbar.scrollHeight;
}

function Script3()
{
  var player = GetPlayer();
const userprompt01value = player.GetVar("userprompt01");
const gptresponse01value = player.GetVar("gptresponse01");
const userprompt02value = player.GetVar("userprompt02");

var messages = []

var system_message = { role: "system", content: "You are a helpful and intelligent chatbot." };
var user_prompt01 = { role: "user", content: `${userprompt01value}` };
var gpt_response01 = { role: "assistant", content: `${gptresponse01value}` };
var user_prompt02 = { role: "user", content: `${userprompt02value}` };

messages.push(system_message);
messages.push(user_prompt01);
messages.push(gpt_response01);
messages.push(user_prompt02);

async function openai_req() {
	fetch('https://19a2-103-144-175-207.ngrok-free.app/letschat', {
		method:'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: JSON.stringify({ messages })
	})
	
	.then(res => res.json())
	.then(data => {
		//console.log(data);
		var gpt_content = data.data.choices[0].message.content;
		gpt_content = gpt_content.trim();
		player.SetVar("gptresponse02", gpt_content);
	})
	.catch(error=>{
		console.error('Error fetching data:', error);
	})
};

openai_req();
}

