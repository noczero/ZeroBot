'use strict'

var token = '211504778:AAErCs7jeVMcs33LgAsVTfuJ9tuexCBBkvE';
var PrayerTimes = require('prayer-times');
//prayTimes = new aprayTimes();

var Bot = require('node-telegram-bot-api'),
	bot = new Bot(token, {polling : true});

console.log('Zero Bot Server Started ...');

bot.onText(/^\/hi (.+)$/, function (msg, match) {
	// body...
	var name = match[1];
	var text = 'Type /senin, /selasa, /rabu to show remaining Examination';
	var waktusholat = '/sholat'
	bot.sendMessage(msg.chat.id, 'Hello ' + name + ' !' + '\n' + text 
		+ '\n' + 'Type /sholat to show prayers time').then(function () {
		//replysent
	});
});


bot.onText(/^\/senin/, function (msg) {
	// body...
	//var name = match[1];
	bot.sendMessage(msg.chat.id, 'DAP | 09-MAY-16 | 13:00:00 | (A208A) KU1.02.15').then(function () {
		//replysent
	});
});

bot.onText(/^\/selasa/, function (msg) {
	// body...
	//var name = match[1];
	bot.sendMessage(msg.chat.id, 'Kalkulus  | 10-MAY-16 | 10:15:00 | (A204B) KU1.02.08').then(function () {
		//replysent
	});
});

bot.onText(/^\/rabu/, function (msg) {
	// body...
	//var name = match[1];
	bot.sendMessage(msg.chat.id, 'Matdis | 11-MAY-16 | 13:00:00 | (A201A) KU1.02.01 ').then(function () {
		//replysent
	});
});

bot.onText(/^\/sholat/, function (msg){
	 //prayTimes.setMethod('ISNA'); 

	var subuh = '04:33';
	var zuhur = '11:48';
	var ashar = '15:10';
	var maghrib = '17:43';
	var isya = '18:55';

	var waktu = new Date();

	//var waktusholat = PrayerTimes.getTimes(new Date(), [-6.974402, 107.631733], +7);

	 // bot.sendMessage(msg.chat.id, waktu.toString() + '\n' + 
	 // 							 'Subuh : '+ waktusholat.fajr + '\n' +
	 // 							 'Zuhur : '+ waktusholat.dhuhr + '\n' +
		// 						 'Ashar : '+ waktusholat.asr + '\n' + 
	 // 							 'Maghrib : '+ waktusholat.maghrib + '\n' +
	 // 							 'Isya : '+ waktusholat.isha + '\n' +
	 // 							 'Sun Rise : ' + waktusholat.sunrise).then(function (){
	 // 							 });

	 bot.sendMessage(msg.chat.id, waktu.toString() + '\n' + 
	 							 'Subuh : '+ subuh + '\n' +
	 							 'Zuhur : '+ zuhur + '\n' +
								 'Ashar : '+ ashar + '\n' + 
	 							 'Maghrib : '+ maghrib + '\n' +
	 							 'Isya : '+ isya + '\n' ).then(function (){
	 							 });


	 // bot.sendMessage(msg.chat.id, 'Zuhur : '+ zuhur);

	 // bot.sendMessage(msg.chat.id, 'Ashar : '+ ashar);

	 // bot.sendMessage(msg.chat.id, 'Maghrib : '+ maghrib);
	
	 // bot.sendMessage(msg.chat.id, 'Isya : '+ isya);
	

});


bot.onText(/^\/maptelkom/, function(msg){
	// var latitude : -6.974402;
	// var longitude : 107.631733;

	bot.sendLocation(
		msg.chat.id , 
		-6.974402 , 
		 107.631733
	).then (function () {});
});

bot.onText(/^\/data (.+)$/ , function(msg , match){
	// var latitude : -6.974402;
	// var longitude : 107.631733;
	// 
	var nama = match[1];

	switch (nama) {
		case "satrya" : 
		case "Satrya" :
		bot.sendMessage(msg.chat.id, 'Nama : Satrya Budi Pratama' + '\n' +
									'NIM : 1301154428' + '\n'  ).then(function () {
		//replysent
		});
		break;

		case "aditya" :
		case "Aditya" : 
		bot.sendMessage(msg.chat.id, 'Nama : Aditya Setiawan' + '\n' +
									'NIM : 1301154218' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Ahmad" : 
		case "ahmad" :
		case "iwan"	:
		bot.sendMessage(msg.chat.id, 'Nama : Ahmad Fikri Listyawan' + '\n' +
									'NIM : 1301154260' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "aisah" :
		case "Aisah" :
		case "ai"	: 
		bot.sendMessage(msg.chat.id, 'Nama : Aisah Mujahidah Rasunah' + '\n' +
									'NIM : 1301154484' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Alfian" :
		case "alfian" :
		bot.sendMessage(msg.chat.id, 'Nama : Alfian Ibadurachman ' + '\n' +
									'NIM : 1301154120' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Ali" :
		case "ali" :
		bot.sendMessage(msg.chat.id, 'Nama : Ali Helmut ' + '\n' +
									'NIM : 1301154246' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Amhar" :
		case "amhar" :
		case "aha"	:
		bot.sendMessage(msg.chat.id, 'Nama : Amhar Hadikusumo ' + '\n' +
									'NIM : 1301154316' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Andhika" : 
		case "Dika" : 
		case "dika" : 
		case "andhika" : 
		bot.sendMessage(msg.chat.id, 'Nama : Andhika Buwananda Nugraha ' + '\n' +
									'NIM : 1301154288' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Salama" : 
		case "salama" : 
		case "Anisa" : 
		case "anisa" : 
		bot.sendMessage(msg.chat.id, 'Nama : Anisa Salama ' + '\n' +
									'NIM : 1301154640' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Annisa" : 
		case "annisa" : 
		bot.sendMessage(msg.chat.id, 'Nama : Annisa Rohimma' + '\n' +
									'NIM : 1301154512' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Farel" : 
		case "farel" : 
		case "Arieffarel" : 
		case "arieffarel" : 
		bot.sendMessage(msg.chat.id, 'Nama : Arieffarrel Edwin Pribadi ' + '\n' +
									'NIM : 1301154344' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Ary" : 
		case "ary" : 
		bot.sendMessage(msg.chat.id, 'Nama : Ary Adhigana Suwandi ' + '\n' +
									'NIM : 1301154414' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Chiara" : 
		case "chiara" : 
		case "Cakra" : 
		case "cakra" : 
		bot.sendMessage(msg.chat.id, 'Nama : Chiara Janetra Cakravania ' + '\n' +
									'NIM : 1301154400' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Danas" : 
		case "danas" : 
		case "Danasawara" : 
		case "danasawara" : 
		bot.sendMessage(msg.chat.id, 'Nama : Danaswara Prawira Harja ' + '\n' +
									'NIM : 1301154148' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Danny" : 
		case "danny" : 
		case "dani" : 
		case "Dani" : 
		bot.sendMessage(msg.chat.id, 'Nama : Danny Aldian Pratama ' + '\n' +
									'NIM : 1301154204' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Dhian" : 
		case "dhian" : 
		case "Dhibeks" : 
		case "dhibeks" : 
		bot.sendMessage(msg.chat.id, 'Nama : Dhian Haryono ' + '\n' +
									'NIM : 1301154190' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Dhiya" : 
		case "dhiya" : 
		case "Jarvis" : 
		case "jarvis" : 
		bot.sendMessage(msg.chat.id, 'Nama : Dhiya Ulhaq Dewangga ' + '\n' +
									'NIM : 1301150050' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Ekky" : 
		case "ekky" : 
		bot.sendMessage(msg.chat.id, 'Nama : Ekky Wicaksana ' + '\n' +
									'NIM : 1301154358' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Roi" : 
		case "Elroi" : 
		case "elroi" : 
		case "roi" : 
		bot.sendMessage(msg.chat.id, 'Nama : Elroi Christian Ndun ' + '\n' +
									'NIM : 1301150008' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Hafizh" : 
		case "Hafizhuddin" : 
		case "hafizh" : 
		case "hafizhuddin" : 
		bot.sendMessage(msg.chat.id, 'Nama : Hafizhuddin ' + '\n' +
									'NIM : 1301150022' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Hamzah" : 
		case "hamzah" : 
		bot.sendMessage(msg.chat.id, 'Nama : Hamzah ' + '\n' +
									'NIM : 1301150078' + '\n'  ).then(function () {
		//replysent
		});						
		bot.sendMessage(msg.chat.id, 'Nama : Hamzah Faisal Azmi ' + '\n' +
									'NIM : 1301154372' + '\n'  ).then(function () {
		//replysent
		});						
		break;
 
		case "Hilal" : 
		case "Nabil" :
		case "hilal" : 
		case "nabil" : 
		bot.sendMessage(msg.chat.id, 'Nama : Hilal Nabil Abdillah ' + '\n' +
									'NIM : 1301154134' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "Iqbal" : 
		case "iqbal" : 
		bot.sendMessage(msg.chat.id, 'Nama : Iqbal Basyar ' + '\n' +
									'NIM : 1301150036' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Ayyub" : 
		case "ayyub" : 
		bot.sendMessage(msg.chat.id, 'Nama : M. Salahuddin Al Ayyubi ' + '\n' +
									'NIM : 1301154232' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Chio" : 
		case "chio" : 
		case "Marchio" : 
		case "marchio" : 
		bot.sendMessage(msg.chat.id, 'Nama : Marchio Farantino ' + '\n' +
									'NIM : 1301154302' + '\n'  ).then(function () {
		//replysent
		});						
		break;

		case "maya" : 
		case "Maya" : 
		bot.sendMessage(msg.chat.id, 'Nama : Maya Rosalinda ' + '\n' +
									'NIM : 1301154540' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Meilinda" : 
		case "meilinda" : 
		case "mei" : 
		case "Mei" : 
		bot.sendMessage(msg.chat.id, 'Nama : Meilinda Khusnul Khotimah ' + '\n' +
									'NIM : 1301154568' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Farrell" : 
		case "farrell" : 
		bot.sendMessage(msg.chat.id, 'Nama : Mochammad Farrell ' + '\n' +
									'NIM : 1301154162' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Dzaky" : 
		case "dzaky" : 
		case "Amal" : 
		bot.sendMessage(msg.chat.id, 'Nama : Muhammad Amal Dzaky ' + '\n' +
									'NIM : 1301154176' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Restu" : 
		case "restu" : 
		bot.sendMessage(msg.chat.id, 'Nama : Muhammad Restu Novriyanata ' + '\n' +
									'NIM : 1301154092' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Imam" : 
		case "imam" : 
		case "Raden" : 
		case "raden" : 
		bot.sendMessage(msg.chat.id, 'Nama : Raden Muhammad Imam ' + '\n' +
									'NIM : 1301154106' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Reina" : 
		case "reina" : 
		bot.sendMessage(msg.chat.id, 'Nama : Reina Wardhani ' + '\n' +
									'NIM : 1301154470' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Vana" : 
		case "Rifana" :
		case "vana" : 
		case "rifana" : 
		bot.sendMessage(msg.chat.id, 'Nama : Rifana Iftitah ' + '\n' +
									'NIM : 1301154274' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Trio" : 
		case "trio" : 
		bot.sendMessage(msg.chat.id, 'Nama : Rizki Trio Novendra ' + '\n' +
									'NIM : 1301154386' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Rizki" : 
		case "rizki" : 
		case "Yusnimar" : 
		case "yusnimar" : 
		bot.sendMessage(msg.chat.id, 'Nama : Rizki Yusnimar ' + '\n' +
									'NIM : 1301154526' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Tamara" : 
		case "tamara" : 
		bot.sendMessage(msg.chat.id, 'Nama : Tamara Suci Pendok Mandouw ' + '\n' +
									'NIM : 1301154456' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Taufik" : 
		case "taufik" : 
		bot.sendMessage(msg.chat.id, 'Nama : Taufik Muarif ' + '\n' +
									'NIM : 1301150064' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Timami" : 
		case "timami" : 
		bot.sendMessage(msg.chat.id, 'Nama : Timami Hertza Putrisanni ' + '\n' +
									'NIM : 1301154498' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Tri" : 
		case "tri" : 
		bot.sendMessage(msg.chat.id, 'Nama : Tri Muryani ' + '\n' +
									'NIM : 1301150442' + '\n'  ).then(function () {
		//replysent
		});						
		break;
		case "Zulfya" : 
		case "zulfya" : 
		case "zul" : 
		case "Zul" : 
		bot.sendMessage(msg.chat.id, 'Nama : Zulfya Annisa Praditha ' + '\n' +
									'NIM : 1301154554' + '\n'  ).then(function () {
		//replysent
		});						
		break;


	}
});