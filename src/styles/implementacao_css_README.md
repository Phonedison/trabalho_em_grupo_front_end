### Sobre o arquivo main.css

O arquivo main.css atua como o ponto central de importação para as folhas de estilo dos diretórios /components e /pages. Ao adicionar novos estilos, siga estas diretrizes:

- **Escopo e Nomenclatura:** Evite a colisão de nomes e a repetição de seletores. Utilize nomes de classes únicos e descritivos.
- **Importação:** Registre novos arquivos utilizando @import url('./caminho/do/arquivo.css'); dentro do main.css.
- **Uso:** Certifique-se de que a página HTML referencie apenas o arquivo central: `<link rel="stylesheet" href="./styles/main.css">`

```bash
<head>
  <meta charset=" UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | Vira-Lar</title>

<!-- Importação dos icones - PROFESSORA ESTAMOS UTILIZANDO O BOOTSTRAP -->
<!-- https://icons.getbootstrap.com/ -> lista dos icones -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" /> -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">

<!-- Links dos css da página construido no repositorio styles -->
  <link rel="stylesheet" href="./styles/main.css">

</head>

```
