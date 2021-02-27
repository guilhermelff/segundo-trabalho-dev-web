$(function () {
    $("#botao-enviar").click(function () {
        validaLocalFunction()

    })

    $("#botao-enviar2").click(function () {
        validaLocalFunction2()

    })

})

function validaLocalFunction() {
    let local = $("#localizacao")


    if (local.val() == '') {
        local.addClass("is-invalid")
        local.removeClass("is-valid")
        return false
    }
    else {
        local.removeClass("is-invalid")
        local.addClass("is-valid")
        return true
    }
}

function validaLocalFunction2() {
    let local2 = $("#localizacao2")

    if (local2.val() == '') {
        local2.addClass("is-invalid")
        local2.removeClass("is-valid")
        return false
    }

    else {
        local2.removeClass("is-invalid")
        local2.addClass("is-valid")
        return true
    }
}