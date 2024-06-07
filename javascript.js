     document.addEventListener("DOMContentLoaded", function() {
        const table = document.getElementById("rankingTable");
        const rows = table.getElementsByTagName("tr");

        let topPlayerName = "";
        let topPlayerPoints = 0;

        let bestWinRatePlayer = "";
        let bestWinRate = 0;

        let mostPointsPlayer = "";
        let mostPoints = 0;

        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("td");
            const playerName = cells[1].innerText;
            const playerPoints = parseInt(cells[2].innerText);
            const playerVictories = parseInt(cells[3].innerText);
            const playerDefeats = parseInt(cells[4].innerText);
            const totalGames = playerVictories + playerDefeats;
            const winRate = totalGames > 0 ? playerVictories / totalGames : 0;

            // Check for Top 1 Player
            if (i === 1) {
                topPlayerName = playerName;
                topPlayerPoints = playerPoints;
            }

            // Check for Most Points Monthly
            if (playerPoints > mostPoints) {
                mostPoints = playerPoints;
                mostPointsPlayer = playerName;
            }

            // Check for Best Win Rate
            if (winRate > bestWinRate) {
                bestWinRate = winRate;
                bestWinRatePlayer = playerName;
            }
        }

        document.getElementById("topPlayerName").innerText = topPlayerName;
        document.getElementById("bestWinRatePlayer").innerText = bestWinRatePlayer;
        document.getElementById("mostPointsPlayer").innerText = mostPointsPlayer;
    });


    //barra de busca
    function search() {
        var input = document.getElementById('search-bar');
        var filter = input.value.toUpperCase();
        var items = document.querySelectorAll('.item');

        items.forEach(function(item) {
            item.classList.remove('highlight');
        });


        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (filter) {
                items.forEach(function(item) {
                    if (item.textContent.toUpperCase().indexOf(filter) > -1) {
                        item.classList.add('highlight');
                    }
                });
            }
    
        }
    }
