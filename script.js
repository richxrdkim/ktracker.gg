document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const form = document.getElementById("projectionForm");
  const resultDiv = document.getElementById("result");
  const toggleBtn = document.getElementById("toggleRowsBtn");

  let showingAll = false;

  function renderTable() {
    tableBody.innerHTML = "";

    Object.keys(matchData).forEach((team) => {
      matchData[team].forEach((match) => {
        match.playerStats.forEach((player) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${player.name}</td>
            <td>${match.opponent}</td>
            <td>${match.map}</td>
            <td>${player.kills}</td>
            <td>${player.agent}</td>
            <td>${match.result}</td>
            <td>${match.date}</td>
          `;
          tableBody.appendChild(row);
        });
      });
    });

    // Initially hide rows 6+
    const rows = document.querySelectorAll("#table-body tr");
    rows.forEach((row, index) => {
      if (index >= 5) row.style.display = "none";
    });

    toggleBtn.textContent = "Show More";
    showingAll = false;
  }

  toggleBtn.addEventListener("click", () => {
    const rows = document.querySelectorAll("#table-body tr");
    if (showingAll) {
      rows.forEach((row, index) => {
        if (index >= 5) row.style.display = "none";
      });
      toggleBtn.textContent = "Show More";
    } else {
      rows.forEach((row) => (row.style.display = ""));
      toggleBtn.textContent = "Show Less";
    }
    showingAll = !showingAll;
  });

  renderTable(); // Important: call this after setting up event listeners

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const team = document.getElementById("teamSelect").value.trim();
    const player = document
      .getElementById("playerName")
      .value.trim()
      .toLowerCase();
    const threshold = parseFloat(document.getElementById("threshold").value);

    if (!team || !player || isNaN(threshold)) {
      resultDiv.textContent = "Please fill out all fields correctly.";
      return;
    }

    if (!matchData[team]) {
      resultDiv.textContent = `No data for team "${team}".`;
      return;
    }

    let totalKills = 0;
    let mapsPlayed = 0;

    matchData[team].forEach((match) => {
      const p = match.playerStats.find(
        (pl) => pl.name.toLowerCase() === player
      );
      if (p) {
        totalKills += p.kills;
        mapsPlayed++;
      }
    });

    if (mapsPlayed === 0) {
      resultDiv.textContent = `${player} did not play for ${team} in tracked matches.`;
      return;
    }

    const avgKills = totalKills / mapsPlayed;
    const verdict = avgKills >= threshold ? "Likely OVER" : "Likely UNDER";

    resultDiv.innerHTML = `
      <h4>Projection for ${player} (${team})</h4>
      <p>Average Kills per Map: <strong>${avgKills.toFixed(2)}</strong></p>
      <p>Kill Line: ${threshold}</p>
      <p class="fs-4 fw-bold">${verdict}</p>
    `;
  });
});
