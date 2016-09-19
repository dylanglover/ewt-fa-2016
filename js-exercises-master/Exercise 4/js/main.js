// ---------------------------------------
// Exersize 4: Create an array with a list of your skillsets
// Loop through them and append each one to
// append them to the <ul class="skillsets"> as <li> elements
var setLength, text, i;
var skillsets = ["Night Club Talent Buyer", "Website Devolopment", "Label Owner"];

setLength = skillsets.length;
text = "<ul>";
for (i = 0; i < setLength; i++) {
    text += "<li>" + skillsets[i] + "</li>";
}
$('.skillsets').append(text);
