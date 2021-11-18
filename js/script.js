function consultaCep(){
    let cep = $('#cep').val();
    
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/unicode/`,
        type: "GET",
        success: function (response) {
            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
        }
    });
}