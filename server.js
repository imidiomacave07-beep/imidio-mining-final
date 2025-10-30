const express = require("express");
const app = express();
app.use(express.json());

// Usuários simulados
let users = [
  { id: 1, name: "Imidio", balance: 100, plan: "Bronze", rate: 0.02 },
  { id: 2, name: "Valina", balance: 200, plan: "Silver", rate: 0.05 }
];

// Função para gerar ganhos automáticos
function generateEarnings() {
  users = users.map(user => ({
    ...user,
    balance: user.balance + user.balance * user.rate + 10
  }));
  console.log("💸 Ganhos atualizados:", users);
}

// Rota para ver saldos
app.get("/balances", (req, res) => {
  res.json(users);
});

// Atualiza ganhos a cada 1 minuto
setInterval(generateEarnings, 60 * 1000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
