const questions = [
    'Quanto você gostou do atendimento?',
    'Quanto você gostou do ambiente?',
    'Quanto você gostou do tempo de espera?',
    'Quanto você gostou do profissionalismo da equipe?',
    'Quanto você gostou da limpeza?',
    'Quanto você gostou do cardápio?',
    'Quanto você gostou da estrutura física?',
    'Quanto você gostou da privacidade?',
    'Quanto você gostou do estacionamento?',
    'Quanto você gostou do serviço de internet?'
];

let currentQuestionIndex = 0;
const questionLabel = document.getElementById('question-label');
const nextBtn = document.getElementById('next-btn');
let selectedRatings = [];

// Inicializa a primeira pergunta
function loadQuestion() {
    questionLabel.textContent = questions[currentQuestionIndex];
    nextBtn.disabled = true;  // Desativa o botão até que uma nota seja selecionada
}

// Adiciona um event listener a todos os botões de nota
document.querySelectorAll('.rating-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Armazena a nota selecionada
        selectedRatings[currentQuestionIndex] = button.value;

        // Habilita o botão de "Próxima Pergunta"
        nextBtn.disabled = false;

        // Mostra qual nota foi selecionada visualmente (opcional, pode personalizar)
        document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Função para avançar para a próxima pergunta
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('selected'));  // Remove seleção da pergunta anterior
    } else {
        // Exibe uma mensagem de agradecimento ou redireciona para uma página de conclusão, por exemplo
        document.getElementById('question-container').innerHTML = "<h2>Obrigado por sua avaliação!</h2>";
        nextBtn.style.display = 'none';  // Esconde o botão "Próxima Pergunta"
    }
});

// Carrega a primeira pergunta
loadQuestion();
