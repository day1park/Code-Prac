var skillset = document.getElementsByClassName('skillset');

alert(skillset)



function main() {
  
    var $skillset = $('.skillset') //jquery selector selecting class 'skillset'
    alert($skillset) // alert function
    }
    
    $(document).ready(main);
    





function main() {
  
    $('.skillset').hide();
      $('.skillset').fadeIn(1000);
      $('.projects').hide();
      $('.projects-button').on('click', function(){ 
        $('.projects').show();
      });
    }
    
    $(document).ready(main);
    



 //toggle
 
 function main() {
  
    $('.skillset').hide();
      $('.skillset').fadeIn(1000);
      $('.projects').hide();
      $('.projects-button').on('click', function(){ 
        $('.projects').toggle();
      });
    }
    
    $(document).ready(main);
    

    /*
var skillset = document.getElementsByClassName('skillset');

alert(skillset)
*/

function main() {
  
    $('.skillset').hide();
      $('.skillset').fadeIn(1000);
      $('.projects').hide();
      $('.projects-button').on('click', function(){ 
        $('.projects').show();
        $('.projects-button').toggleClass('active');
      });
    }
    
    $(document).ready(main);
    



    ~~~~~~~~~~~~~
    function main() {
  
        $('.skillset').hide();
          $('.skillset').fadeIn(1000);
          $('.projects').hide();
          $('.projects-button').on('click', function(){ 
            $(this).next().toggle();
            $(this).toggleClass('active');
          });
        }
        
        $(document).ready(main);
        

        --------------------


        function main() {
  
            $('.skillset').hide();
              $('.skillset').fadeIn(1000);
              $('.projects').hide();
              $('.projects-button').on('click', function(){ 
                $(this).next().slideToggle(400);
                $(this).toggleClass('active');
                $(this).text('Projects Viewed');
              });
            }
            
            $(document).ready(main);
            