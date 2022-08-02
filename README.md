# Manual do Programador

Criei este projeto com o objetivo de armazenar todo o meu aprendizado pessoal de programação, optei por disponibilizar no GitHub para fosse possível com que outras pessoas que também estão aprendendo tivessem acesso ao conteúdo, além disso a comunidade poderá incluir novos conteúdos para compartilhar conhecimento.

A ideia central do projeto é simplificar ao máximo o conteúdo apresentado, limitando a Título, Descrição, Código ou Comando, e por fim o Resultado. Novos elementos podem ser adicionados no futuro, porém é necessário que eles não precisem de internet ou de um servidor para funcionar, pois as páginas também devem carregar em um ambiente off-line.

## Contribuindo
Caso tenha algo que você possa fazer para melhorar o projeto, ou encontrou alguma informação imprecisa, e gostaria de ajudar, crie um [Fork](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) do projeto, realize as alterações necessárias e crie um [pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork), em seguida irei incluir no projeto original.

Para ajudar o projeto com novos conteúdos:
- Crie um [Fork](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) do projeto.
- Em seu Fork copie o arquivo ``contents\_example.html`` na mesma pasta.
- Altere o nome da cópia para o nome do conteúdo que deseja incluir.
- Com este arquivo aberto, adicione os conteúdos a ``const content``.
- Por fim altere o arquivo ``_contents.js``:
  - Adicione um novo objeto a lista informando ``id, name, description``.
  - O ``id`` é nome do arquivo recém-criado em content.
  - O ``name`` é nome do conteúdo novo.
  - O ``description`` é uma breve descrição do conteúdo.
