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

/* code to run the following function only when the rta results are back*/

$(document).ready(function() {
let rootScope = angular.element('html').scope().$root
  rootScope.$on('apiSuccess', (scope) => setTimeout(AppendToHoldings, 2000))
});

/*function to append text to records where the RTA Location Code requires users to do something*/

 function AppendToHoldings() {
          
          $('div.availabilityInfo').each(function () {
          //console.log($(this).text() ); 
          var LocArr = $(this).text().split(',');          
          var Loc = LocArr[0].replace(/[\s\n]+/g,'');
                   //console.log(Loc);
          if (Loc == 'CRL') {
              //console.log("Special Collections Appointment needed");
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div></br>" ).insertAfter( $(this) );
          } 
         else if (Loc == 'SPECCOLL') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }
         else if (Loc == 'ARC') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }
         else if (Loc == 'AB') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );
          }
         else if (Loc == 'OFFSITE') {
              $( "<div id='specialcol'><em>Access by appointment: please email <a href='mailto:special-collections@rca.ac.uk' target='_blank'>special-collections@rca.ac.uk</a> to arrange</em></div>" ).insertAfter( $(this) );

          }                   
          else if (Loc == 'FLTV') {
              $( "<div id='specialcol'><em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_NONC') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
          else if (Loc == 'PER_RES') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
           else if (Loc == 'THESES') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }
           else if (Loc == 'STACK') {
              $( "<em>Ask at Library Desk</em></br>" ).insertAfter( $(this) );
          }     
            else if (Loc == 'PER_CURR') {
              $( "<em>Latest Issue in Journals Room</em></br>" ).insertAfter( $(this) );
            }
   });
 }

/* Adding additional Custom Links to Summon.*/

angular.module('summonApp')
.run(['configService', function (config) {
    config.data.links.custom1 = {
        href: "https://rca.libguides.com/az.php",
        label: "A-Z Online Resources"
     }
    config.data.links.custom2 = {
        href: "http://qh7vn5wm4q.search.serialssolutions.com/",
        label: "EJournal Finder"
     }
     config.data.links.custom3 = {
         href: "https://researchonline.rca.ac.uk/",
         label: "RCA ResearchOnline"
     }
     config.data.links.custom4 = {
         href: "https://moodle.rca.ac.uk/",
         label: "Moodle"
     }
     config.data.links.custom5 = {
         href: "https://intranet.rca.ac.uk/book-suggestions/",
         label: "Book Suggestions"
     }
      config.data.links.custom6 = {
         href: "https://intranet.rca.ac.uk/inter-library-loans/",
         label: "Inter Library Loan"
     }
 }]);
