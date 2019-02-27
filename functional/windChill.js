var wind=require('../utility/utility');
var read=require("readline-sync");
var t=read.questionInt("enter the temperature in farenheit(less than 50)");
var v=read.questionInt("enter the wind speed(3<v<120");
wind.windChill(t,v);
