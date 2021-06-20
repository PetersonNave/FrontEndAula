var btn = document.querySelector('.btnSubmit')
var textInicial = document.querySelector('#txtIni')
var input = document.querySelector('.pesquisa');
var mostrarPesquisa = document.querySelector('.result')
var mostrarResult = document.querySelector('.example')


const results = [
    {nome: 'BUILDAR', definicao: 'Buildar: Compilar código programável em um executável.', exemplo: ' Exemplo: <br>"Agora o Jenkins consegue buildar normalmente o código do repositório." <br> "Após a nova versão do compilador, o código não builda mais."'}
    ,{nome: 'REFATORAR', definicao: 'Refatorar: Reescrever o código-fonte de um software tornando-o mais simples e legível sem modificar o seu comportamento observável.', exemplo: ' Exemplo: <br>"Meu código tá muito bagunçado, preciso refatorar ele."'}
    ,{nome: 'ALGORITMO', definicao: 'Algoritmo: maneira chique de falar passo-a-passo com uma série de verificações. Sabe aquela receita de bolo que a sua avó seguia? Então, aquilo era algoritmo em sua forma mais deliciosa. ', exemplo: ' Exemplo: <br>"Como funciona o algoritmo dessa calculadora que você fez?"'}
    ,{nome: 'BACK-END', definicao: 'Back-End: É a parte da web que fica invisível para o usuário final. Programadores Back-end são os responsáveis por criar toda a magia que acontece “por trás dos panos”, toda vez que você usa uma aplicação. São inúmeras linguagens de back-end, sendo JavaScript, Ruby, Python e PHP as mais usadas por empresas de tecnologia, hoje.', exemplo: ' Exemplo: <br>"Estou precisando de um programador Back-End para tornar meu site funcional."'}
    ,{nome: 'BUG', definicao: 'Bug: Também conhecido como “dar pau”, é aquela coisa injusta que acontece por culpa do computador (e nunca do programador...kkkkk), fazendo com que os programas não se comportem exatamente da maneira esperada.', exemplo: ' Exemplo: <br>"O site que você me entregou está cheio de bugs."<br> "Não consigo identificar o bug desse código, que raiva."'}
    ,{nome: 'CODAR', definicao: 'Codar: O ato de criar códigos, é o mesmo que falar "programar."', exemplo: ' Exemplo: <br>"Eu gosto de codar em JavaScript ou C++."'}
    ,{nome: 'COMITAR', definicao: 'Comitar: É tipo um “save” tridimensional. Imagina que você está trabalhando em um projeto com centenas de arquivos e que, na hora de salvar, você pudesse guardar não apenas as mudanças feitas naquele arquivo, mas também as mudanças feitas em TODOS os arquivos do projeto, assim como saber quais arquivos foram modificados, adicionados ou apagados. Seria incrível, né? Pois é exatamente isso o que o Git faz! Quando um dev diz que “comitou”, ele quer dizer que já terminou aquela parte do trabalho e o estado do projeto está “salvo” no Git.', exemplo: ' Exemplo: <br>"Acabei de comitar o projeto que estamos fazendo, dá uma olhada pra ver como ficou."'}
    ,{nome: 'DEBUG', definicao: 'Debug/”debugar”: processo lento, doloroso e carcinogênico de retirar bugs de uma aplicação. ', exemplo: ' Exemplo: <br>"Você já debugou aquele arquivo em C++ que você me mandou cheio de erros?"'}
    ,{nome: 'DEBUGAR', definicao: 'Debug/”debugar”: processo lento, doloroso e carcinogênico de retirar bugs de uma aplicação. ', exemplo: ' Exemplo: <br>"Você já debugou aquele arquivo em C++ que você me mandou cheio de erros?"'}
    ,{nome: 'FOO', definicao: 'O termo "FOO" não possui um significado muito preciso, Esse é um termo genérico amplamente usado para se referir a qualquer entidade na informática cujo nome se ignora ou não se quer expressar. É como se fosse o Fulano que usamos na língua portuguesa.', exemplo: ''}
    ,{nome: 'BAR', definicao: 'O termo "BAR" não possui um significado muito preciso, Esse é um termo genérico amplamente usado para se referir a qualquer entidade na informática cujo nome se ignora ou não se quer expressar. É como se fosse o Fulano que usamos na língua portuguesa.', exemplo: ''}
    ,{nome: 'FOOBAR', definicao: 'O termo "FOOBAR" não possui um significado muito preciso, Esse é um termo genérico amplamente usado para se referir a qualquer entidade na informática cujo nome se ignora ou não se quer expressar. É como se fosse o Fulano que usamos na língua portuguesa.', exemplo: ''}
    ,{nome: 'FUNFAR', definicao: 'Funfar: Código que funciona (mesmo que a gente não saiba o porquê, kkkk)', exemplo: ' Exemplo: <br>"Vou te mandar um código, vê se ele vai funfar no teu PC."<br> "O cliente disse que o programa não funfa no PC dele, porém no meu funfa =/"'}
    ,{nome: 'FRAMEWORK', definicao: 'Framework: oferece as funcionalidades básicas para qualquer aplicação, e a cara, o formato e as características finais da aplicação, quem decide é o seu criador.', exemplo: ' Exemplo: <br>"Pensa no pão-de-forma: uma porção de carboidratos pré-moldados que pode servir de base a várias aplicações alimentícias. Com um pão-de-forma, você pode criar desde clássicos da “larica” de geladeira vazia como o pão-de-forma com ketchup e maionese até bruschettas chiques. Podemos dizer que o pão-de-forma é um framework alimentar."'}
    ,{nome: 'FRONT-END', definicao: 'Front-End: É a parte da web que você vê. Desenvolvedores Front-End são aqueles que se preocupam com a experiência do usuário (UX) e com a interface (UI ou GUI), trabalhando principalmente com HTML, CSS e JavaScript.', exemplo: ' Exemplo: <br>"Preciso de um programador Front-End para deixar meu site mais responsívo e com mais animações."'}
    ,{nome: 'FULL-STACK', definicao: 'Full-Stack: São chamados Full-stack developers os devs que entendem tanto de front quanto de back-end.', exemplo: ' Exemplo: <br>"Preciso de um programador FUll-Stack para criar meu site por completo."'}
    ,{nome: 'GIT', definicao: 'Git: Ferramenta de controle de versão de arquivos que permite o trabalho colaborativo sem a necessidade de ficar enviando e renomeando arquivos por e-mail, além da possibilidade de saber, para cada alteração: quem fez, quando, onde (em que arquivos e linhas de código) e por quê.', exemplo: ''}
    ,{nome: 'HARDWARE', definicao: 'Hardware: termo técnico que foi traduzido para a língua portuguesa como equipamento, e pode ser definido como um termo geral da língua inglesa, que se refere a parte física de computadores e outros sistemas microeletrônicos.', exemplo: '"Como diz o ditado, hardware é aquilo que a gente chuta. Software é aquilo que a gente xinga."'}
    ,{nome: 'IDENTAÇÃO', definicao: 'Indentação: São os recuos no texto de um código usados para organizar visualmente e melhorar a leitura', exemplo: ''}
    ,{nome: 'SOFTWARE', definicao: 'Software: conjunto de componentes lógicos de um computador ou sistema de processamento de dados; programa, rotina ou conjunto de instruções que controlam o funcionamento de um computador; suporte lógico.', exemplo: '"Como diz o ditado, hardware é aquilo que a gente chuta. Software é aquilo que a gente xinga."'}
    ,{nome: 'DIRETÓRIO', definicao: 'Diretório: Estrutura utilizada para organizar arquivos em um computador ou um arquivo que contém referências a outros arquivos. Um diretório pode conter referências a arquivos e a outros diretórios, que podem também conter outras referências a arquivos e diretórios.', exemplo: '"Resumindo, diretórios  são as pastas do computador"'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}
    ,{nome: '', definicao: '', exemplo: ' Exemplo: <br>""'}





]
function Teste(e){
   e.preventDefault();}


console.log(results.length);
    var find = true;
btn.addEventListener('click', function() {


   
    var teste =(input.value).toUpperCase() ;
   find = true;
console.log(teste)
    results.forEach(search => {
        
     if(search.nome ===teste && find === true && teste.trim() != '' ){
        textInicial.style.display = 'none';
      mostrarPesquisa.innerHTML = (search.definicao).toString();
      mostrarResult.innerHTML = (search.exemplo).toString();
mostrarPesquisa.style.visibility = 'inherit';
mostrarResult.style.visibility= 'inherit';
       find = false;
      
     }
        
    });

    if(find &&  teste.trim() != '' ){
        textInicial.style.display = 'none';
        mostrarPesquisa.innerHTML = 'Sorry :( <br> Não encontramos resultados para ' + input.value +' <br> <br> Mas não se preocupe, estamos trabalhando nisso, em breve "'+input.value +'" já estará em nosso banco de dados :) ';
        mostrarPesquisa.style.visibility = 'inherit';  
        mostrarResult .style.visibility = 'hidden'; 
       
     }



})



console.log(results[0].definicao)