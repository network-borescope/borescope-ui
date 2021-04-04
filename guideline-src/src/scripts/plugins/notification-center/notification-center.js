/*global setTimeout:true*/
(function($) {
    // Executar logo após o carregamento completo da página
    $(function() {
        // Procura o link que abre o dropdown menu com as
        // notificações disponíveis
        $('.notification-toggle').each(function() {
            var notificationToggle = $(this);
            // Procura pelo notification center na barra de navegação do sistema
            var noteCenter = notificationToggle.parents('.notification-center');
             // Contador de notificações
            var notificationCounter = noteCenter.find('.notification-counter');
            var notificationsAvailable = parseInt(notificationCounter.text(), 10);

            if (notificationsAvailable === 0) {
                notificationCounter.hide();
                return;
            }
            else {
                // Quando o usuário clicar no link, devemos ocultar o
                // contador caso não existam notificações não lidas a serem
                // verificadas pelo usuário
                notificationToggle.one('click', function(event) {
                    // Devemos chamar a operação remota para enviar o id da ultima notificação
                    // não lida, para que no próximo request ela não seja mais exibida como
                    // uma notificação não lida.
                    var lastUnreadNotification = noteCenter.find('.notifications .notification:first-child')
                        .data('id');

                    // Remove a classe .notification-unread de todas as
                    // notificações listadas
                    setTimeout(function() {
                        noteCenter.find('.notification')
                            .removeClass('notification-unread');
                    }, 500);

                    notificationCounter.animate({
                        opacity: 0
                    });
                });
            }
        });
    });

}(jQuery));