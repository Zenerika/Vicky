window.MYAPP=window.MYAPP||{},function(){const $=window.jQuery;window.MYAPP.initDatepicker=function(){console.log("loading datepicker"),$(function(){$("#datepicker").datepicker()})}}(),window.MYAPP=window.MYAPP||{},function(){const $=window.jQuery;window.MYAPP.initQuote=function(){console.log("loading quote api"),$(document).ready(function(){$.ajaxSetup({cache:!1}),$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=",function(data){$(".quote").html(data[0].content+" - "+data[0].title)})})}}(),window.MYAPP=window.MYAPP||{},function(){const $=window.jQuery,MYAPP=window.MYAPP;$(function(){console.info("Intializing the application now."),MYAPP.initQuote(),MYAPP.initDatepicker()})}();