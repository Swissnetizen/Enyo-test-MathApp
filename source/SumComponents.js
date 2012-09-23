var SumComponents = [
// the toolbar at the top of the page indicating the title
    {kind: "onyx.Toolbar", content: "Math App",},
    //The problem that the user has to solve
    {tag: "h1", name: "Problem", content: "Press Submit To Start" + " =", classes: "enyo-inline",},
    //the input(Decorator) where the user will enter the code
    {kind: "onyx.InputDecorator", classes: "enyo-inline", components: [
    // the actually input                                                the submit button
    {kind: "onyx.Input", name: "Answer", onkeydown: "AnswerKeyDown",},{kind: "onyx.Button", name: "Submit", content: "Submit", ontap: "SubmitFunc"}
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
