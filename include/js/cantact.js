$(document).ready(function() {
    $("#provincia").autocomplete({
        source: ["San Jose",
        "Cartago",
        "Alajuela",
        "Heredia",
        "Puntarenas",
        "Limon",
        "Guanacaste",]
    });
    $('#canton').autocomplete({
        source:[
        " San José",
        " Escazú",
        " Desamparados",
        " Puriscal",
        " Tarr",
        " Aserrí",
        " Mora",
        " Goicoechea",
        " Santa Ana",
        " Alajuelita",
        " Vásquez de Coronado",
        " Acosta",
        " Tibás",
        " Moravia",
        " Montes de Oca",
        " Turrubares",
        " Dota",
        " Pérez Zeledón",
        " León Cortés",
        " Alajuela",
        " San Ramón",
        " Grecia",
        " San Mateo",
        " Atenas",
        " Naranjo",
        " Palmares",
        " Poás",
        " Orotina",
        " San Carlos",
        " Alfaro Ruíz",
        " Valverde Vega",
        " Upala",
        " Los Chiles",
        " Guatuso",
        " Cartago",
        " Paraíso",
        " La Unión",
        " Jiménez",
        " Turrialba",
        " Alvarado",
        " Oreamuno",
        " El Guarco",
        " Heredia",
        " Barva",
        " Santo Domingo",
        " Santa Bárbara",
        " San Rafael",
        " San Isidro",
        " Belén",
        " Flores",
        " San Pablo",
        " Sarapiquí",
        " Liberia",
        " Nicoya",
        " Santa Cruz",
        " Bagace",
        " Carrillo",
        " Cañas",
        " Abangares",
        " Tilarán",
        " Nandayure",
        " La Cruz",
        " Hojancha",
        " Puntarenas",
        " Esparza",
        " Buenos Aires",
        " Montes de Oro",
        " Osa",
        " Aguirre",
        " Golfito",
        " Coto Brus",
        " Parrita",
        " Corredores",
        " Garabito",
        " Limón",
        " Pococí",
        " Siquirres",
        " Talamanca",
        " Matina",
        " Guácimo",
        ]
    });

    var name = $('#name');
    var lastName = $('#lastName');
    var provincia = $('#provincia');
    var canton = $('#canton')
    var mail = $('#mail');
    var tel = $('#tel');

    function vaciar(){
        name.val('')
        lastName.val('')
        mail.val('')
        tel.val('')
        canton.val('')
        provincia.val('')
    };

    $('#btnEnviar').click(function(e) {
        e.preventDefault();
        var formValido = true;
        
        // Valida cada campo del formulario
        if ($('#name').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Nombre es obligatorio'
        });
        }
        if ($('#lastName').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Apellido es obligatorio'
        });
        }
        if ($('#provincia').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Provincia es obligatorio'
        });
        }
        if ($('#canton').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Canton es obligatorio'
        });
        }
        if ($('#tel').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Teléfono es obligatorio'
        });
        
        }
        if ($('#mail').val() == '') {
        formValido = false;
        swal({
            icon: 'error',
            title: 'Error',
            text: 'El campo Mail es obligatorio'
        });
        
        }
        
        // Si el formulario es válido, muestra un mensaje de éxito
        if (formValido) {
        swal({
            icon: 'success',
            title: 'Exito',
            text: 'El formulario se ha enviado correctamente'
        });
        vaciar();
        }
    });
});
    