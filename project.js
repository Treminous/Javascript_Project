let btn=document.querySelector('#new-quote');
let text=document.querySelector('.quote');
let author=document.querySelector('.person');
const quotes=[{quote:"I do the very best I can and I know I can do the very best",
person:"Doris Omwaka"},
{quote:"I do the very best I can and I know I can do the very best",
person:"Janet Wamalwa"},
{quote:"I do the very best I can and I know I can do the very best",
person:"Mathew Lincoln"},
{quote:"I do the very best I can and I know I can do the very best",
person:"Precious Nandiri"},
];
btn.addEventListener('click',function()
{
let random =Math.floor(Math.random()*quotes.length);
quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;
}
);