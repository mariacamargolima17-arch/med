// 1. Mapeamento de Elementos do DOM (Document Object Model)
const themeToggleBtn = document.getElementById('theme-toggle');
const likeBtn = document.getElementById('like-btn');
const likeCountSpan = document.getElementById('like-count');
const bodyElement = document.body;

// 2. Funcionalidade Dinâmica: Contador com Lógica Condicional
let totalLikes = 0;

likeBtn.addEventListener('click', () => {
    totalLikes++;
    likeCountSpan.textContent = totalLikes;
    
    // Lógica Condicional para melhorar a UX (Experiência do Usuário)
    if (totalLikes === 10) {
        likeBtn.textContent = "🎉 Super Leitor!";
        likeBtn.style.backgroundColor = "var(--accent-color)";
    } else if (totalLikes === 1) {
        likeBtn.textContent = "❤️ Obrigado pelo clique!";
    }
});

// 3. Troca de Temas (Light / Dark Mode)
themeToggleBtn.addEventListener('click', () => {
    // Verifica qual classe está ativa e alterna
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        // Acessibilidade: Atualiza o estado para leitores de tela se necessário
        themeToggleBtn.setAttribute('aria-label', 'Mudar para tema claro');
    } else {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        themeToggleBtn.setAttribute('aria-label', 'Mudar para tema escuro');
    }
});
