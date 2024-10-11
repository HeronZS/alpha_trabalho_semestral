// Perguntas simuladas
const perguntas = [
    "Como você avalia o atendimento da recepção?",
    "Como você avalia a limpeza das instalações?",
    "Como você avalia a atenção dos enfermeiros?",
    "Como você avalia a pontualidade no atendimento?"
];

// Função para carregar as perguntas dinamicamente
function carregarPerguntas() {
    const container = document.getElementById('perguntasContainer');
    perguntas.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');

        const label = document.createElement('label');
        label.innerText = pergunta;
        perguntaDiv.appendChild(label);

        const escala = document.createElement('div');
        escala.classList.add('escala');

        // Criar os botões de 0 a 10
        for (let i = 0; i <= 10; i++) {
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `pergunta${index}`;
            radio.value = i;
            radio.id = `pergunta${index}_${i}`;

            const labelRadio = document.createElement('label');
            labelRadio.setAttribute('for', radio.id);
            labelRadio.innerText = i;

            escala.appendChild(radio);
            escala.appendChild(labelRadio);
        }

        perguntaDiv.appendChild(escala);
        container.appendChild(perguntaDiv);
    });
}

// Validação básica do formulário
document.getElementById('avaliacaoForm').addEventListener('submit', function(event) {
    let valid = true;
    perguntas.forEach((pergunta, index) => {
        const radios = document.getElementsByName(`pergunta${index}`);
        let selecionado = false;

        radios.forEach(radio => {
            if (radio.checked) selecionado = true;
        });

        if (!selecionado) {
            valid = false;
            alert(`Por favor, responda a pergunta: "${pergunta}"`);
            event.preventDefault();
        }
    });

    if (valid) {
        alert('O Hospital Regional Alto Vale (HRAV) agradece sua resposta e ela é muito importante para nós, pois nos ajuda a melhorar continuamente nossos serviços.');
    }
});

// Carregar perguntas ao iniciar
window.onload = carregarPerguntas;
