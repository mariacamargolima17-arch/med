// --- FUNCIONALIDADE 1: SELETOR DE TEMA ---
const botaoTema = document.getElementById('theme-toggle');
const corpoPagina = document.body;

botaoTema.addEventListener('click', () => {
    // Altera as classes do body para controlar as cores do CSS
    if (corpoPagina.classList.contains('dark-mode')) {
        corpoPagina.classList.remove('dark-mode');
        corpoPagina.classList.add('light-mode');
    } else {
        corpoPagina.classList.remove('light-mode');
        corpoPagina.classList.add('dark-mode');
    }
});

// --- FUNCIONALIDADE 2: ENVIO DE COMENTÁRIOS SEM RECARREGAR ---
const formularioComentario = document.getElementById('comment-form');
const inputComentario = document.getElementById('comment-input');
const blocoComentarios = document.getElementById('comments-container');

formularioComentario.addEventListener('submit', (evento) => {
    // Bloqueia o reset padrão que a página daria ao enviar o form
    evento.preventDefault();

    // Limpa os espaços vazios do texto digitado
    const textoDigitado = inputComentario.value.trim();

    if (textoDigitado !== "") {
        // Cria a caixinha do novo comentário estruturada
        const estruturaComentario = document.createElement('div');
        estruturaComentario.classList.add('comment-item');
        
        // Define o conteúdo interno do comentário adicionado
        estruturaComentario.innerHTML = `<strong>👤 Estudante de Adm:</strong> <p>${textoDigitado}</p>`;
        
        // Joga a caixinha nova dentro da lista visível do blog
        blocoComentarios.appendChild(estruturaComentario);
        
        // Apaga o que ficou escrito no campo de texto para o próximo uso
        inputComentario.value = "";
    }
});
