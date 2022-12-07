window.addEventListener('load', (event) => {
    console.log("window loaded");
    lucky();
    luckyColor();
});

const text = document.getElementById("projectIntro");
text.addEventListener('mouseover', () => {
    document.getElementById("projectStory").style.fontSize = "40px";
})

window.addEventListener('click', (event) => {
    console.log("window loaded");
    lucky();
    luckyColor();
});

//clicks keep count -> change background of css style.background color 
// function clickCounter()
// {
//     var x = 0;
//     x = click
//     if(clicks > 5)
    
// }


function lucky()
{
    var r = Math.floor(Math.random()*1000);
    document.getElementById("number").innerText = `your lucky number is ${r}`;
    console.log("lucky");
}

function luckyColor(){
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        const x = '#' + n.slice(0, 6);
        document.getElementById("color").innerText = `your lucky color is ${x}`;
        document.getElementById("colorBlock").style.backgroundColor = `${x}`;
        console.log(`${x}`)
      };
      
      console.log(random_hex_color_code())

}