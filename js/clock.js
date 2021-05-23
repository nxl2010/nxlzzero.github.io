var nav1 = document.querySelector('#nav1');
var nav2 = document.querySelector('#nav2');
var nav3 = document.querySelector('#nav3');
var nav4 = document.querySelector('#nav4');
       
        var tet = new Date("Feb 20,2022 24:00:00").getTime();
        //Tổng số giây 
        var birth = new Date("Oct 20,2021 24:00:00").getTime();
        var test= new Date("Jun 30,2021 24:00:00").getTime();
        var home= new Date("Apr 30,2021 24:00:00").getTime(); 
        var countDown = setInterval(run,1000);
        function run(){
 
            var now = new Date().getTime();
            //Số s đến thời gian hiện tại
            var timeRest1 = tet - now;
            var timeRest2 = birth - now;
            var timeRest3 = now-home;
            var timeRest4= test-now;
            //Số s còn lại để đến tết;
            var day1 = Math.floor(timeRest1/(1000*60*60*24));
                       nav1.innerHTML = day1;
                               
             var day2 = Math.floor(timeRest2/(1000*60*60*24));
                       nav2.innerHTML = day2;
                       
             var day3 = Math.floor(timeRest3/(1000*60*60*24));
                       nav3.innerHTML = day3;
             //            if(timeRest <= 0){
             //            clearInterval(counDown);
             //            p.innerHTML = "HPNY";
             //            }                  
              var day4 = Math.floor(timeRest4/(1000*60*60*24));
                       nav4.innerHTML = day4;
                                     
    }