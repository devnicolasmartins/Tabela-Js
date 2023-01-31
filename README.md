# Tabela-Js

Aplicação para adicionar pacientes a uma tabela utilizando HTML, CSS e JavaScript realizada no curso de JavaScript da Alura, porém, com algumas alterações realizadas por mim que, ao meu ver, tornaram a aplicação mais interessante.
<br><br>
O projeto é constituído pelos seguintes itens:
<br><br>
1- Campo de Busca: No campo é possível escrever uma letra ou nome desejado e a aplicação automaticamente filtratá o conteúdo da tabela com base no que for escrito no campo.<br><br>
2- Tabela: Tabela com os primeiros pacientes, adicionados no HTML raiz.<br><br>
3- Botão 'Buscar Pacientes': Ao clicar nesse botão, a aplicação realiza uma consulta uma API que retorna um array com vários pacientes. Os pacientes contidos no array serão adicionados na tabela após seu carregamento total.<br><br>
4- Formulário: Formulário para adicionar novos pacientes manualmente, sendo devidamente preenchido com suas respectivas informações.<br><br>
5- Botão 'Adicionar': Ao clicar nesse segundo botão, as informações contidas no formulário serão enviadas para a tabela e o objeto se tornará um paciente, será criado uma nova tag TR e tags TD na tabela, com as classes já utilizadas nas tags existentes.<br>
<br>
Funções:
<br><br>
1- Excluir paciente: Ao clicar no botão ao lado das informações de cada paciente, ele será excluído da tabela.<br><br>
2- Valor inválido: Caso o valor inserido no formulário de adição de pacientes seja inválido (baseado nas condições reais estabelecidas de cada campo), será exibida uma mensagem de erro abaixo do campo em que o valor inválido estiver inserido, não sendo possível adicionar o paciente à tabela até que o valor seja corrigido e, quando a correção acontecer, a mensagem de erro irá desaparecer.<br>
<br>
Acesse em: https://aparecidanutricionista.vercel.app/
