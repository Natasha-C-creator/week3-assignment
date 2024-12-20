# week3-assignment

Cookie Clicker Assignment

- Started by copying Joe's walking skeleton.
- Changed background in CSS file, tried to put all the div elements into a grid/rows.
- Went over the Fetch API workshop and created console.js to work on the workshop as a reminder.
- Started to apply the same logic from Fetch API workshop into the app.js file.
- I can see the returned JSON data in the console log.
- MANAGED TO GET THE API DATA TO SHOW ON THE PAGE!! (With, full disclosure, some help of google results nand Chat GPT to debug my code. It was useful to show that I was defining things too early and let me know if I'm missing (), {}, ; etc).
- Removed some divs from the index.html file as these were not needed
- I managed to get the boxes for the returned API data to span the entire width of the screen! It's only doing the button at the moment, but it's a start...
- Realised that it is probably showing all parts of the box at 100%, but because the words are short, they aren't spanning!
- YAY!! I managed to get the 'Click here to get a cookie' button working. Again, there were a lot of Qs to AI to ask "explain this to me as if I'm 8". And even if it did spit out a piece of code, it wouldn't work and I'd have to do lots of debugging. So I'm leaning on AI, and I'm still questioning how much I'm learning as I wouldn't be able to clearly explain some of the code back to someone else, but I'm understanding generally how things are working and why.
- Now working on getting the Reset button to reset the cookie amount. Trying to follow the same logic as the eventListener on the cookie button, but I think my lack of knowledge of the syntax is tripping me up as I can't get it to reset.
- So pleased with myself!! Managed to get the reset button to work correctly (when it's clicked, it changes the 'cookies owned' line to 'You have 0 cookies'.), with only using MDN docs and not needing to rely on ChatGPT to help debug my code!
- The reset button is only changing the text to 'You have 0 cookies' and I can see that it's remembering the previous cookie total, so that when you click 'add cookie' button again, it increases from the previous total. Ho hum.
- Started work on the incremental increase of cookies after each second. Took me ages to figure it out and I suspect I was quite close to getting it to work, but asked ChatGPT to take a look in the finish as I couldn't do it. I then figured it out but had a feeling the code could be streamlined further, so I asked ChatGPT and it could. I've copied the code into the app.js file commented out with a note but I'm not using it.
