# How to use my damn Popsicle() plugin!

## 1. Start by making a popsicle function.  Everything below will go   inside of this function.

**A**) With this function you're going to use an argument of **options**. (in case later you'd like to add more)

**Inside** this function create the element(**document.createElement**) wham with the argument of **div** to make **wham** an actual div.
Now since wham is now a div you can begin styling in javascript. That's right, **IN JAVASCRIPT.**

	- EX: wham.style.whateverStyle
	
After you have styled your div, you might wanna add some text inside of the div. You do so by using innerHTML. 
**wham.innerHTML = options**

**B**) To actually  place this new wham div in the **document** of the **body**, you must use **appendChild** with the argument of wham. 

	- EX: document.body.appendChild(wham)

**Document**- the actual page

**Body** - in in the content of what you are creating

**AppendChild** - moves it from its current position to its new position.


### 2. Making your button

**A**) Make a variable called button and create it using **createElement("button")**

**B**) Style it using the same technique as above.

**C**) Add it to the body using innerHTML again with a "string" being the text you want inside of  the button. **This Button will be inside of the div you just made and named.**

### 3. Calling Button & Making it Clickable

**A**) To make your button clickable you would use API addEventListener. Which is essentially telling your computer to listen out for the nex *event* to happen to the targeted variable. 

	- Ex: *target.addeventListener* = button.addeventListener

**B**) Next add the type and function. The type is a string representing the event type to *listen* for. 


### 4. Calling popsicle function **popsicle()**

**A**) Begin by making the button you created.



