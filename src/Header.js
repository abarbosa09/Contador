/*COLOCAR O NOME DA 'CLASSE É UMA BOA PRATICA DE PROGRAMÇAO EM JS 
export segue o mesmo conceito que o public do java
{} = jsx - puro java script
() = html 
const = constante
; = não é obrigatório mas se usar em um tem que usar em todos.

Essa tela pode ser usado apenas com a tag <Header/> lembrar da letra maiuscula*/

export function Header(props) {
  const nomeDoProjeto = "Projeto Leitura";

  return (
    <>
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </>
  );
}
