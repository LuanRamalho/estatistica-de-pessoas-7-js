function calcularEstatisticas() {
    const c = parseInt(document.getElementById('c').value) || 0;
    const cpp = parseInt(document.getElementById('c++').value) || 0;
    const csharp = parseInt(document.getElementById('c#').value) || 0;
    const java = parseInt(document.getElementById('java').value) || 0;
    const javascript = parseInt(document.getElementById('javascript').value) || 0;
    const php = parseInt(document.getElementById('php').value) || 0;
    const ruby = parseInt(document.getElementById('ruby').value) || 0;
    const r = parseInt(document.getElementById('r').value) || 0;
    const python = parseInt(document.getElementById('python').value) || 0;

    const totalPessoas = c + cpp + csharp + java + javascript + php + ruby + r + python;

    const porcentagemC = totalPessoas ? (c / totalPessoas) * 100 : 0;
    const porcentagemCpp = totalPessoas ? (cpp / totalPessoas) * 100 : 0;
    const porcentagemCsharp = totalPessoas ? (csharp / totalPessoas) * 100 : 0;
    const porcentagemJava = totalPessoas ? (java / totalPessoas) * 100 : 0;
    const porcentagemJavascript = totalPessoas ? (javascript / totalPessoas) * 100 : 0;
    const porcentagemPhp = totalPessoas ? (php / totalPessoas) * 100 : 0;
    const porcentagemRuby = totalPessoas ? (ruby / totalPessoas) * 100 : 0;
    const porcentagemR = totalPessoas ? (r / totalPessoas) * 100 : 0;
    const porcentagemPython = totalPessoas ? (python / totalPessoas) * 100 : 0;

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
        <h2>Resultados</h2>
        <p>Total de pessoas pesquisadas: ${totalPessoas}</p>
        <p>Pessoas que gostam da linguagem C: ${c} (${porcentagemC.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemC}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem C++: ${cpp} (${porcentagemCpp.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemCpp}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem C#: ${csharp} (${porcentagemCsharp.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemCsharp}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem Java: ${java} (${porcentagemJava.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemJava}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem Javascript: ${javascript} (${porcentagemJavascript.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemJavascript}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem PHP: ${php} (${porcentagemPhp.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemPhp}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem Ruby: ${ruby} (${porcentagemRuby.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemRuby}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem R: ${r} (${porcentagemR.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemR}%;"></div>
        </div>
        <p>Pessoas que gostam da linguagem Python: ${python} (${porcentagemPython.toFixed(2)}%)</p>
        <div class="barra">
            <div class="progresso" style="width: ${porcentagemPython}%;"></div>
        </div>
    `;
}
