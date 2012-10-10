var SumComponents = [
// the toolbar at the top of the page indicating the title
 {kind: "onyx.MoreToolbar", name: "HeaderToolbar", components: [
		{content: "Math"},{kind: "onyx.Button", content:"Hello Button"}
		]},
	{kind:"onyx.Groupbox", components:[
    //The problem that the user has to solve
    {name: "Problem", content: "Press Submit To Start" + " =", style: "padding: 8px;",},
    //the input(Decorator) where the user will enter the code
    {kind: "onyx.InputDecorator",  components: [
    // the actually input                                                the submit button
    {kind: "onyx.Input", style: "width: 100%", name: "Answer", onkeydown: "AnswerKeyDown",},
 
    ],},
       {kind: "onyx.Button", content:"Submit", ontap:"SubmitFunc", style: "width: 100%"}
    
    ],},
    //The popup that is displayed when the user fails
    {name: "FailPopup", kind: "onyx.Popup", floating: true, centered: true, scrim: true,
        style: "padding: 10px+", components: [
                   
            {tag: "h1", content: "You were WRONG!",},
            {name:"CorrectAnswer", content: "",},
            {name: "Ok",kind: "onyx.Button", content: "Okay", ontap: "OkFailPopup",}
            ],  
    
    
    }
	];
