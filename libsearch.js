         // Get HTML head element 
        var head = document.getElementsByTagName('head')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://iainrca.github.io/summon/libsearch.css';  
  
        // Append link element to HTML head 
        document.head.appendChild(link);


$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 2000))
});

 function AppendToHoldings() {
          
          $('div.availabilityInfo').each(function () {
          //console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   console.log(Loc);
          if (Loc == 'CRL') {
              console.log("Special Collections Appointment needed");
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );
          } 
         else if (Loc == 'SPECCOLL') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
         else if (Loc == 'ARC') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
         else if (Loc == 'AB') {
              $( "<em>Contact <a href='https://www.rca.ac.uk/more/special-collections/access-location-and-appointments/' target='_blank'>Archives and Special Collections</a> to book an appointment</em></br>" ).insertBefore( $(this) );

          }
          else if (Loc == 'FLTV') {
              $( "<em>Contact Library Desk to request item</em></br>" ).insertBefore( $(this) );

          }
   });
 }
