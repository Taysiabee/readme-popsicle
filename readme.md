# How to use my damn Popsicle() plugin!

## 1. Start by making a popsicle function. Everything below will go  inside of this function.

**A**) With this function you're going to use an argument of **options**. *

	- EX: function functionName(argument) 
	*(in case later you'd like to add more options)*

**Inside** this function create a div and name that div variable wham. You'll use **document.createElement** to create this with tag name of **div** to make **wham** the actual name of div.
Now since wham is now a div you can begin styling in javascript. That's right, **IN JAVASCRIPT.**

	- EX: wham.style.whateverStyle
	
After you have styled your div, you might wanna add some text or features inside of the div. You do so by using innerHTML. 

	- EX: wham.innerHTML = options**

**B**) To actually  place this new wham div you've created in the **document** of the **body**, you must use **appendChild** with the argument of the div you created *wham*. 

	- EX: document.body.appendChild(wham)

**Document**- the actual page

**Body** - in in the content of what you are creating

**AppendChild** - moves div from its current position to its new position.

*You have now created a div in JS, styled it a placed it in the body*

### 2. Making your button

**A**) To make a button to make your popup appear make a variable called button and create it using the syntax: 

	- EX: document.createElement("string")**

Using "button" as the string.

**B**) Style it using the same technique as above for JS.

**C**) Add it to the document body using appendChild. The same syntax  used above with button as the child.

### 3. Making Button Clickable

**A**) To make your button clickable you would use API addEventListener. Which is essentially telling your computer to listen out for the nex *event* to happen to the targeted variable. 

	- Ex: target.addeventListener = button.addeventListener

**B**) Next add the type and function. The type is a string representing the event type to *listen* for. Then add the popsicle  function.
	
		- Ex: target.addEventListener('event', function(){
		popsicle({
     
    	});
	})


	button.addEventListener('click', function(){
		popsicle({
    	
    	});
	})

### 4. Options 

Now that you have a div box called *wham*, and a cliackable button to make the wham div appear, you can add some features or *options*.

**A**) Let's say you want to add a **Progress Bar** with a **Timer* that closes the box after a few seconds, adding this onto wham div you created. 

Use an *if* statement. This should be placed inside the function underneath where you placed the div in the body.

		- EX: **if (condition) {
		
			}**

**B**) Since we're adding a *Timer* **AND** a *Progress bar*, these two are your conditions.

		- EX: **if (options.timer) {
					if (optionsprogressBar)  {
					
					}
			}**

**C**) SO what you are saying is **IF** there is a timer options and **IF** Progress bar is true... DO the following inside the function.

		- EX: let progressBar = document.createElement("div")
		*this is creating the progress bar div.*

Now appendChild to place this progress bar **INSIDE** the popup wam div you created.
	
		wham.appendChild(progressBar)







