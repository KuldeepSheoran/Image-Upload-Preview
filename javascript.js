/* 
 * Author: Kuldeep Sheoran
 * Author URL: http://github.com/KuldeepSheoran
 * License: Creative Commons Attribution 3.0 Unported
 * License URL: http://creativecommons.org/licenses/by/3.0/

 */


  counter=0;
        
  
        function clear_selected_image(a,b)
        {    
             document.getElementById(a).value="";
             var el = document.getElementById(b);
             el.parentNode.removeChild( el );
             id_extra=b;
             counter--;
             
                    for(var c=0;c<5;c++)
                {
                   
                     document.getElementById("up"+c).style.display="none";
                                           
                                                         
                }
                
                     document.getElementById("up"+id_extra).style.display="block";

        }
        
        
 function set_preview(abc,xyz,pqr) {
                counter++;
      var thisid=xyz;
      var imgid=pqr;
 
        var parent=document.getElementById("post_preview1");

    var reader = new FileReader();
   
    reader.readAsDataURL(abc.files[0]);
          
    reader.onload = function (e) {
               var ff=e.target.result;
                for (var x = 0; x < abc.files.length; x++)
                {
                var newimg = document.createElement('img');
                newimg.setAttribute('src', e.target.result);
                newimg.setAttribute('height','68px'); 
                //newimg.setAttribute('id', counter);
                newimg.setAttribute('id', imgid);
                newimg.setAttribute('style', 'padding-right:5px;padding-bottom:5px;max-width:85px;');
                newimg.setAttribute('title', 'Click to Remove It');
                newimg.setAttribute('name', thisid);
                newimg.setAttribute('onmouseover','show_delete_option('+imgid+')');
                newimg.setAttribute('onmouseout','hide_delete_option('+imgid+')');
                newimg.setAttribute('onClick','clear_selected_image(this.name,this.id)');  
                parent.appendChild(newimg);
                
                document.getElementById("up0").style.display="none";
                for(var a=1;a<5;a++)
                {
                    if(a==counter)
                    {
                    document.getElementById("up"+a).style.display="block";
                    }
                    else
                    {
                     document.getElementById("up"+a).style.display="none";
                                           
                    }
                                       
                }
          
            }};
            
                  
}

function show_delete_option(id)
{
    //alert(id);
    document.getElementById(id).style.opacity="0.5";
    document.getElementById(id).style.cursor="pointer";
}
function hide_delete_option(id)
{
     document.getElementById(id).style.opacity="1";
}
