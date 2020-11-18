//Numbers in Javascript
document.write("Numbers <br/>");
document.write("MAX Number: " + Number.MAX_VALUE + "<br/>");
document.write("MIN Number: " + Number.MIN_VALUE + "<br/>");

//Strings in Javascript
var esc_char_double_quote = "\"";
var esc_char_single_quote = "\'";
var esc_char_tab = "Tab right next to me \t Tab left from me";
var esc_char_backslash = "\\";

document.write("<br/> Strings <br/>");
document.write("Escape Characters <br/>");
document.write("Double quote: " + esc_char_double_quote + "<br/>");
document.write("Single quote: " + esc_char_single_quote + "<br/>");
document.write("Tab space *doesn't always work*: " + esc_char_tab + "<br/>");
document.write("Backslash: " + esc_char_backslash + "<br/>");

var first_name = "Cesar";
var last_name = "Romo";
var full_name = first_name + " " + last_name;

document.write("My Full Name: " + full_name + "<br/>");

document.write("Length of characters of my full name is: " + full_name.length + "<br/>");
document.write("First 3 letters of my name: " + full_name.substring(0,3) + "<br/>");
document.write("Last character: " + full_name.charAt(full_name.length - 1) + "<br/>");
document.write("Index of character " + esc_char_single_quote + "s" + esc_char_single_quote + ": " + full_name.indexOf('s') + "<br/>")

//Booleans in Javascript

//Symbols in Javascript (JS standard ES2015)

//Objects in Javascript
//Function
//Array
//Date
//RegExp

//null and undefined in Javascript

//let
//const
//var
var num_string = "5";
var num_int = 10;

var sum_string_int = num_string + num_int;
var sum_int_string = num_int + num_string;
var substract_string_int = num_string - num_int;
var substract_int_string = num_int - num_string;
var mult_string_int = num_string * num_int;
var mult_int_string = num_int * num_string;

document.write("<br/> Variables <br/>");
document.write("String + Number > 5 + 10 = " + sum_string_int + "<br/>");
document.write("Number + String > 10 + 5 = " + sum_int_string + "<br/>");
document.write("String - Number > 5 - 10 = " + substract_string_int + "<br/>");
document.write("Number - String > 10 - 5 = " + substract_int_string +  "<br/>");
document.write("String * Number > 5 * 10 = " + mult_string_int + "<br/>");
document.write("Number * String > 10 * 5 = " + mult_int_string + "<br/>");

document.write("<br/> Data Types and Conversion <br/>");
document.write("Convert String " + esc_char_single_quote + "5"+ esc_char_single_quote + " to Number > " + Number("5") + "<br/>");
document.write("Convert Number " + esc_char_single_quote + "5"+ esc_char_single_quote + " to String > " + String(5) + "<br/>");

var float_var = 3.141592;
var float_toString = float_var.toFixed(2);
var float_toInt = parseInt(float_var);

document.write("PI number: " + float_var + ". Data Type: " + typeof(float_var) + "<br/>");
document.write("PI number to Int: " + float_toInt + ". Data Type: " + typeof(float_toInt) + "<br/>");
document.write("PI number at 2 decimals to String: " + float_toString + ". Data Type: " + typeof(float_toString) + "<br/>");