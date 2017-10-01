//Напишите функцию, которая выводит в HTML документ нумерованный список песен:

let playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];


//-----------------------------------------
let playlistBlock = document.getElementById("box");
renderList = (block, list) => {
    block.innerHTML = `<ol id="playlist--numbered">`;
    let blockNumbered = document.getElementById("playlist--numbered");
    list.map(function(item) {
        blockNumbered.innerHTML += `<li> ${item.author} - ${item.song};</li>`;
    });
}
renderList(playlistBlock, playList);
