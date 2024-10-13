const questions = [
    'Como foi seu atendimento na recepção?',
    'Como foi seu atendimento pela equipe de enfermagem?',
    'Como foi o atendimento do seu médico?',
    'Quanto você gostou do profissionalismo da equipe?',
    'Qual nota daria para a limpeza e higienização do ambiente?',
    'Classifique as refeições oferecidas.',
    'Qual nota daria para as instalações?',
    'Como avaliaria a sua privacidade?',
    'O que achou do estacionamento do hospital?',
    'O que achou do serviço de internet?'
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

        // Mostra qual nota foi selecionada visualmente
        document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

// Função para avançar para a próxima pergunta
nextBtn.addEventListener('click', () => {
    // Se ainda houver perguntas, avança
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('selected'));  // Remove seleção da pergunta anterior
    } 
    // Se for a última pergunta, exibe o campo de feedback
    else if (currentQuestionIndex === questions.length - 1) {
        currentQuestionIndex++;
        document.getElementById('question-container').style.display = 'none';  // Oculta o bloco de perguntas
        document.getElementById('feedback-container').style.display = 'block'; // Exibe o campo de feedback
        nextBtn.textContent = 'Enviar';  // Altera o texto do botão para "Enviar"
    } 
    // Após o feedback, exibe a mensagem de agradecimento
    else {
        const feedback = document.getElementById('feedback').value;

        // Exibe a mensagem de agradecimento
        document.querySelector('.container').innerHTML = `
            <img src="/public/img/logo-white.png" alt="Logo do Hospital" class="logo">
            <h1>Pesquisa de Satisfação</h1>
            <h2>Obrigado por sua avaliação!</h2>
            <p class="disclaimer">Sua avaliação espontânea é anônima, nenhuma informação pessoal é solicitada ou armazenada.</p>
        `;
    }
});

// Carrega a primeira pergunta
loadQuestion();
