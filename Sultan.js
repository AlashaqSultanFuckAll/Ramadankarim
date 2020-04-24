
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
},290000);


const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const settings = require("./config.json"); 
     var prefix = "";

client.on('ready', () => {
  console.log(`[AxG] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});
client2.on('ready', () => {
  console.log(`[AxG] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`);
});
client3.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[AxG] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Sultan `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});

const serverid = "693909518127464569"; 
const roomid = "694277940430766230";


client.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']

  setInterval(() => {
client.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});


client2.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']
  setInterval(() => {
client2.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client3.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']
  setInterval(() => {
client3.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client4.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']
  setInterval(() => {
client4.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client5.on('ready', async () => {
let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']

  setInterval(() => {
client5.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client6.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']

  setInterval(() => {
client6.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client7.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']
  setInterval(() => {
client7.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client8.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']

  setInterval(() => {
client8.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client9.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']
  setInterval(() => {
client9.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});

client10.on('ready', async () => {

let AxG = ['“Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
         '“It’s not about ideas. It’s about making ideas happenThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.””',
         '“The most courageous act is still to think for yourself. Aloud.Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye”',
         'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
         '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
         'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.',
         'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.',
         '‘One does not discover new lands without consenting to lose sight of the shore for a very long time',
         '“Youve gotta dance like theres nobody watching,Love like youll never be hurt,Sing like theres nobody listening,And live like its heaven on earth.”',
         '“If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals If you can make a woman laugh, you can make her do anything.”',
         'You shouldn’t blindly accept a leader’s advice. You’ve got to question leaders on occasion Life is like riding a bicycle. To keep your balance, you must keep moving.”.',
         '“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”',
         'Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshin Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”',
         'Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.',
         'Someone’s sitting in the shade today because someone planted a tree a long time ago.“You dont love someone because theyre perfect, you love them in spite of the fact that theyre not.',
         'The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward',
         '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
         '“The more that you read, the more things you will know. The more that you learn, the more places youll go.One good thing about music, when it hits you, you feel no pain.”',
         'Work like you dont need the money. Love like youve never been hurt. Dance like nobodys watchingIt is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.”',
         'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
         '“Heres to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. Theyre not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,while some may see them as the crazy ones, we see genius. Because ”',
         '“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when theyre right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”',
         '“It is our choices, Harry, that show what we truly are, far more than our abilities Not all those who wander are lost Never trust anyone who has not brought a book with them.”',
         '“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”',
         '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ',
         'There are two ways of spreading light: to be the candle or the mirror that reflects it Some infinities are bigger than other infinities.”',
         '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
         'Wise men speak because they have something to say; Fools because they have to say something Do one thing every day that scares you.”',
         'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.. All you need is love. But a little chocolate now and then doesnt hurt',
         '“The opposite of love is not hate, its indifference. The opposite of art is not ugliness, its indifference. The opposite of faith is not heresy, it indifference. And the opposite of life is not death, its indifference.”',
         '“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”',
         '“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',
         '“Have you ever been in love? Horrible isnt it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”',
         'Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.',
         '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go...”',
         '“This life is what you make it. No matter what, youre going to mess up sometimes, its a universal truth. But the good part is you get to decide how youre going to mess it up. Girls will be your friends - theyll act like it anyway. But just remember,',
         'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you Life isnt about finding yourself. Life is about creating yourself.”',
         '“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”',
         'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails Whenever I feel the need to exercise, I lie down until it goes away.”',
         '"I am," he said. He was staring at me, and I could see the corners of his eyes crinkling. "Im in love with you, and Im not in the business of denying myself the simple pleasure of saying true things. Im in love with you, and I know that love is just a shout into the void',
         'I am nothing special, of this I am sure. I am a common man with common thoughts and Ive led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but Ive loved another with all my heart and soul, and to me, this has always been enough..”',
         'I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail “Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind.”'
    , '“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book “Not all of us can do great things. But we can do small things with great love.””',
         '“Saying I notice youre a nerd is like saying, Hey, I notice that youd rather be intelligent than be stupid, that youd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why'
    , '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”']

  setInterval(() => {
client10.guilds.get(serverid).channels.get(roomid).send(`${AxG[Math.floor(Math.random() *AxG.length)]}`);
},260000);
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b1") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b2") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b3") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b4") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b5") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b6") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b7") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b8") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b9") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});

client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "b10") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`\n ${(args.join(' '))}`);
  }

});


client.login(settings.token);
client2.login(settings.token2);
client3.login(settings.token3);
client4.login(settings.token4);
client5.login(settings.token5);
client6.login(settings.token6);
client7.login(settings.token7);
client8.login(settings.token8);
client9.login(settings.token9);
client10.login(settings.token10);