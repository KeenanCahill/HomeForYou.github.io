/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 10
   Tutorial Case

   Author:   Teresa Jenner
   Date:     3/1/2012

   Filename: imlibrary.js

   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   writeContent(windowObj, choice, guess)
      Writes a sample pop-up window to the windowObj window object
      using choice as the text of the user's quiz answer and
      guess as Boolean variable indicating whether the choice
      is correct.

   popWin(url)
      Opens a pop-up window displaying the page at url

   answer(choice, guess)
      Displays either a built-in dialog box or a custom dialog box
      with the user's choice and a Boolean variable guess indicating
      whether that choice is correct or not.

*/

function popWin(url) {
  pop = window.open(
    url,
    "pop",
    "width=330,height=220,left=80, top=230, screenX=80, screenY=220, scrollbars=yes"
  );
  testpop = pop == null || typeof pop == "undefined" ? true : false;
  return testpop;
}
