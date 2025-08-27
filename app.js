function formatarPreco(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`;
}

function atualizarTotais() {
    let totalFinal = 0;
    const linhas = document.querySelectorAll('tbody tr');

    linhas.forEach(linha => {
        const input = linha.querySelector('.quantidades');
        const precoUnit = parseFloat(linha.querySelector('.preco-unitario').textContent.replace('R$', '').replace(',', '.'));
        const precoTotal = precoUnit * parseInt(input.value);
        linha.querySelector('.preco-total').textContent = formatarPreco(precoTotal);
        totalFinal += precoTotal;
    });

    document.getElementById('total-final').textContent = formatarPreco(totalFinal);
}

document.querySelectorAll('.quantidades').forEach(input => {
    input.addEventListener('change', () => {
        if (input.value < 1) input.value = 1;
        atualizarTotais();
    });
});

document.querySelectorAll('.remover-produto').forEach(botao => {
    botao.addEventListener('click', () => {
        botao.closest('tr').remove();
        atualizarTotais();
    });
});

atualizarTotais(); // Chama ao iniciar
