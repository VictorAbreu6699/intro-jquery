function consultaCep(){
    let cep = $('#cep').val();
    $('.barra-progresso').show();
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/unicode/`,
        type: "GET",
        success: function (response) {
            $('#cep-titulo').html("CEP: "+response.cep);
            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);  
            $('#table').show(); 
            $('.barra-progresso').hide();         
        }
    });
}

jQuery(function($) {
	$('#table').hide();
    $('.barra-progresso').hide();         
});

