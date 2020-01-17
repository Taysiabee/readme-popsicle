function popsicle(options) {
    //wham is the box
	var wham = document.createElement("div");
    wham.style.width = "500px";
    wham.style.height = "100px";
    wham.style.background = "lime";
    wham.style.fontWeight = "bold";
    wham.style.position = "absolute";
    wham.style.top = "20px";
    wham.style.right= "20px";
    wham.style.margin = "auto";
    wham.style.color = "black";
    wham.style.textAlign = "center";
    wham.style.fontSize = "20px";
    wham.style.padding = "20px"
    wham.style.textDecoration = "solid white 5px";
    wham.innerHTML = options.message

    //wham box in body
    document.body.appendChild(wham)
    
    if (options.time) {
         if (options.progressBar) {
            let progressBar = document.createElement("div")
            wham.appendChild(progressBar)
            progressBar.style.position = "absolute"
            progressBar.style.bottom = "0"
            progressBar.style.left = "0"
            progressBar.style.height = "6px"
            progressBar.style.backgroundColor = "red"
            progressBar.style.transition =  (options.time)/1000 + 's'
            progressBar.style.width= "100%"
            progressBar.style.transitionTimingFunction= "linear"
            setTimeout(function(){
                progressBar.style.width = "0%"
            }, 10)
        }
        // setTimeout(function(){

        // })
    }
   
  



    //make button
    var btn = document.createElement("button");
    btn.style.float = "right";
    btn.style.color = "lime";
    btn.innerHTML = "NAH"
    
    wham.appendChild(btn);//btn is the child, puts it into wham div



   //set time
    setTimeout(function(){
        wham.remove()
    }, options.time)//can be whatever developer chooses

    

}// function popsicle complte










//calling buttons
// let button = document.querySelector('button')

// calling popsicle
button.addEventListener('click', function(){
	popsicle({
        message: 'ARE YOU SURE YOU WANT TO ENTER?',
        time: 5000,
        progressBar: true,
    });
})


 

