$(document).ready(function(){
   $('#reg').submit(function(e){
       e.preventDefault();
        var name=$('#name').val();
        var age=$('#age').val();
        var register={
           'name':name,
           'age':age
        };
        
        $.ajax({
            type:"POST",
            url:"/register",
            data:register,
            success:function(res){
                alert('Successfully registered');
            },
            error:function(error){
              
            }
        });
 
   });
   
   $('#list').submit(function(e){
       e.preventDefault();
       $('input#check_name').on('keyup change', function() {
           if($(this).val()==""){
               $('#result > span').empty();
           }
       });
       
        var name=$('#check_name').val();
        var check={
            'name':name
        };
        
        $.ajax({
            type:"POST",
            url:"/list",
            data:check,
            success:function(res){
               $('#result > span').html(res);
            },
            error:function(error){
              
            }
        });    
   });
});
