$(function(){
    $("#button").bind("click",function(){

		var abc , def , sexs;
		abc = $("#birth").val();
		def = $("#blood").val();
        sexs = $("#sex").val();
		re = new RegExp(abc);
		re2 = new RegExp(def);
        re3 = new RegExp(sexs);

        $("#data tbody tr").each(function(){
            var txt = $(this).find("td").text();
            if(txt.match(re3) != null){

							if(txt.match(re) != null){
									                
                                                if(txt.match(re2) != null){
                                                    $(this).show();
                                            }else{
                                                    $(this).hide();
                                            }
							}else{
									$(this).hide();
							}
            }else{
                $(this).hide();
            }
        });
    });

    $("#button2").bind("click",function(){
        $("#data tr").show();
    });
});
