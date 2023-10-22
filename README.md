# Desafio_VNW_Calculadora

Este é um projeto de uma calculadora simples desenvolvida em React para comtemplar o desafio proposto pelo Curso Vai na Web. Ela permite realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Além disso, oferece funcionalidades para limpar a tela e exibir o resultado.

Tecnologias Utilizadas
React: Uma biblioteca JavaScript para a criação de interfaces de usuário.
styled-components: Uma biblioteca para estilizar componentes React.

### Netlify

O projeto está hospedado na Netlify e você pode acessá-lo [clicando aqui](https://calculadora-argelhr.netlify.app/).

### Instalação
Clone o repositório:
```
git clone https://github.com/argelhr/Desafio_VNW_Calculadora
```
Navegue até o diretório do projeto:
```
cd Desafio_VNW_Calculadora
```

Instale as dependências:
```
npm install
```

Após a instalação, você pode iniciar o aplicativo localmente. No diretório do projeto, execute:

```
npm run dev
```
Isso iniciará o aplicativo em modo de desenvolvimento. Abra http://localhost:3000 no seu navegador para visualizar a calculadora.

### Funcionalidades
Números: Clique nos números de 0 a 9 e no ponto (.) para inserir os valores no visor da calculadora.
Operações: Clique nas operações matemáticas (+, -, *, /) para realizar cálculos.
Igual (=): Clique em "=" para obter o resultado que possui no acumulador.
C (Limpar): Clique em "C" para limpar o visor da calculadora e reiniciar.

### Método de Uso
1. O display possui dois campos de texto em um fundo branco.
2. O campo inferior é destinado à entrada de dados, e você pode inserir números e operadores usando o teclado na interface.
3. O campo superior exibe o resultado após a execução de uma operação.
4. Os cálculos são realizados com base no valor exibido no campo superior e no valor presente no campo inferior, considerando a operação matemática selecionada.
