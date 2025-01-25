function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Alterna entre ocultar e mostrar o menu
}


// Fecha o menu se clicar fora dele

// Aguarda o DOM carregar antes de manipular os elementos
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("rankingTable");
    const rows = table.getElementsByTagName("tr");

    let topPlayerName = "";
    let topPlayerPoints = 0;

    let bestWinRatePlayer = "";
    let bestWinRate = 0;

    let mostPointsPlayer = "";
    let mostPoints = 0;

    // Loop pelas linhas da tabela para identificar os jogadores de destaque
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        if (cells.length === 0) continue; // Ignorar linhas vazias

        const playerName = cells[1]?.innerText.trim() || "Unknown"; // Nome do jogador
        const playerPoints = parseInt(cells[2]?.innerText) || 0; // Pontos
        const playerVictories = parseInt(cells[3]?.innerText) || 0; // Vitórias
        const playerDefeats = parseInt(cells[4]?.innerText) || 0; // Derrotas
        const totalGames = playerVictories + playerDefeats;
        const winRate = totalGames > 0 ? playerVictories / totalGames : 0; // Taxa de vitória

        // Atualiza o jogador no topo
        if (i === 1) {
            topPlayerName = playerName;
            topPlayerPoints = playerPoints;
        }

        // Verifica o jogador com mais pontos
        if (playerPoints > mostPoints) {
            mostPoints = playerPoints;
            mostPointsPlayer = playerName;
        }

        // Verifica o jogador com melhor taxa de vitória
        if (winRate > bestWinRate) {
            bestWinRate = winRate;
            bestWinRatePlayer = playerName;
        }
    }

    // Atualiza os campos de destaque no HTML
    document.getElementById("topPlayerName").innerText = `${topPlayerName} (${topPlayerPoints} pts)`;
    document.getElementById("bestWinRatePlayer").innerText = `${bestWinRatePlayer} (${(bestWinRate * 100).toFixed(1)}%)`;
    document.getElementById("mostPointsPlayer").innerText = `${mostPointsPlayer} (${mostPoints} pts)`;
});

// Função de busca
function search() {
    const input = document.getElementById('search-bar').value.toUpperCase().trim(); // Remove espaços e ignora case
    const items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        item.classList.remove('highlight'); // Remove o destaque inicial
        if (item.textContent.toUpperCase().includes(input) && input !== "") {
            item.classList.add('highlight'); // Adiciona destaque ao item correspondente
            item.scrollIntoView({ behavior: "smooth", block: "center" }); // Centraliza o item na tela
        }
    });
}


