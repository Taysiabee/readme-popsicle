# How to use my damn Popsicle() plugin!

## 1. Start by making a popsicle function. Everything below will go  inside of this function.

**A**) With this function you're going to use an argument of **options**. *functions functionName(argument)*. (in case later you'd like to add more options)

**Inside** this function create a div and name the variable wham. You'll use **document.createElement** to create this with tag name of **div** to make **wham** the actual name of div.
Now since wham is now a div you can begin styling in javascript. That's right, **IN JAVASCRIPT.**

	- EX: wham.style.whateverStyle
	
After you have styled your div, you might wanna add some text or features inside of the div. You do so by using innerHTML. 
**wham.innerHTML = options**

**B**) To actually  place this new wham div in the **document** of the **body**, you must use **appendChild** with the argument of the div you created *wham*. 

	- EX: document.body.appendChild(wham)

**Document**- the actual page

**Body** - in in the content of what you are creating

**AppendChild** - moves div from its current position to its new position.

*You have now created a div in JS, styled it a placed it in the body*

### 2. Making your button

**A**) Make a variable called btn and create it using **createElement("button")**

**B**) Style it using the same technique as above.

**C**) Add it to the body using innerHTML again with a "string" being the text you want inside of  the button. **This Button will be inside of the div you just made and named wham.**

### 3. Calling seperate Button & Making it Clickable

**A**) To make your button to call the wham div clickable you would use API addEventListener. Which is essentially telling your computer to listen out for the nex *event* to happen to the targeted variable. 

	- Ex: target.addeventListener = button.addeventListener

**B**) Next add the type and function. The type is a string representing the event type to *listen* for. Then add the popsicle   function.
	
		- Ex: target.addEventListener('event', function(){
		popsicle({
     
    	});
	})


	button.addEventListener('click', function(){
		popsicle({
    	
    	});
	})

**2**) Now that you have a div box called *wham*, & a cliackable button to make the div appear, you can add some



