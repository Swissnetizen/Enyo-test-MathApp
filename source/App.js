enyo.kind({
//Defines important varibels    
	name: "App",
	fit: true,
	classes:"onyx",
	n1: 0,
	n2: 0,
    CorrectResult: 0,
    ProblemType: 0,
    ProblemTypeString: "0", 
    ProblemTypes: new Array("", "+", "-", "x", "/"),
    CorrectAnswers: 0,
    MaxDecimals: 2,
    
	
	
	
//Comonents that are retrived from an other file
	components: SumComponents,
	
//When a key is pressed on the keyboard this is called	
	AnswerKeyDown: function(inSender, inEvent) {
	    //If the enter key is pressed
	    if (inEvent.keyCode == 13){
	    this.SubmitFunc();
	    }
	    },
	 //What happens if the user presses okay on the failpoup
	OkFailPopup: function() {
	    this.NewProblem();
	    this.$.FailPopup.hide()
	    //reset the correct answer to nothing
	    this.$.CorrectAnswer.content = "";
	},
	
	        
	//Sets a new problem
	NewProblem: function() {
	    this.n1 = Math.floor(Math.random() * 10+1);
        this.n2 = Math.floor(Math.random() * 10+1);
	    this.ProblemType = Math.floor(Math.random() * 4+1);
	    this.$.Answer.hasNode().value = "";
	
	
	// figures out what type the problem is and does special actions according to that 
	    switch(this.ProblemType) {
           //Addition
            case 1:
                //Rounds the answer to 2 d.p.            
	            this.CorrectResult = RoundNumber(this.n1 + this.n2, this.MaxDecimals);
	            this.ProblemTypeString = "+";
	            break;
            //Subtration
            case 2:
             //Rounds the answer to 2 d.p.       
                this.CorrectResult = RoundNumber(this.n1 - this.n2, this.MaxDecimals);
                this.ProblemTypeString = "-";
                break;
             //Multiplication
            case 3: 
             //Rounds the answer to 2 d.p.       
                this.CorrectResult = RoundNumber(this.n1 * this.n2, this.MaxDecimals);
                this.ProblemTypeString = "x";
                break;
            //devision
            case 4:
             //Rounds the answer to 2 d.p.       
                this.CorrectResult = RoundNumber(this.n1 / this.n2, this.MaxDecimals);
                this.ProblemTypeString = "/";
                break;
        
    }; 
    //Sets and renders the new problem
        this.$.Problem.content = this.n1 + " " + this.ProblemTypeString + " " + this.n2 + "=";
        this.$.Problem.render();
    //Returns true to indicate everything went well
	
	    return true;   
	},
	// Is called when the user presse the submit button or the enter key
	SubmitFunc: function(inEvent, inSender) {
	    if (RoundNumber(this.$.Answer.hasNode().value, 2) == this.CorrectResult) {
	        this.NewProblem();
        } else {
            this.$.CorrectAnswer.content = "The Correct Answer was: " + this.CorrectResult;
            this.$.CorrectAnswer.render();
            this.$.FailPopup.show();
            
        }
	   
	        
     
	},
	
	
	


});
