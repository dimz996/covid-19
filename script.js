$.getJSON("https://www.hpb.health.gov.lk/api/get-current-statistical",function(data){


 var update_date_time =data.data.update_date_time;
 var local_new_cases = data.data.local_new_cases;
 var local_total_cases =data.data.local_total_cases;
 var local_total_number_of_individuals_in_hospitals = data.data.local_total_number_of_individuals_in_hospitals;
 var local_deaths = data.data.local_deaths;
 var local_new_deaths = data.data.local_new_deaths;
 var local_recovered =data.data.local_recovered;
 var local_active_cases = data.data.local_active_cases;
var global_new_cases =data.data.global_new_cases;
var global_total_cases =data.data.global_total_cases;
var global_deaths =data.data.global_deaths;
var global_new_deaths=data.data.global_new_deaths;
var global_recovered =data.data.global_recovered;
var total_pcr_testing_count =data.data.total_pcr_testing_count;










 $(".local_new_cases").append(local_new_cases);
 $(".update_date_time").append(update_date_time);
 $(".local_total_cases").append(local_total_cases);
 $(".local_total_number_of_individuals_in_hospitals").append(local_total_number_of_individuals_in_hospitals);
 $(".local_deaths").append( local_deaths);
 $(".local_new_deaths").append(local_new_deaths);
 $(".local_recovered").append(local_recovered);
 $(".local_active_cases").append(local_active_cases);
 $(".global_new_cases").append(global_new_cases);
 $("global_total_cases").append(global_total_cases);
 $("global_deaths").append(global_deaths);
 $(".global_new_deaths").append(global_new_deaths);
 $(".global_recovered").append(global_recovered);
 $(".total_pcr_testing_count").append(total_pcr_testing_count);






}); 