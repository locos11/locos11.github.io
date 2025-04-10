document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = '#e0e0e0';

    const discordLink = document.querySelector('.fab.fa-discord');
    discordLink.addEventListener('click', (event) => {
        event.preventDefault();
        const discordUsername = 'locos11';
        navigator.clipboard.writeText(discordUsername).then(() => {
            alert('¡Usuario de Discord copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
    });
});
