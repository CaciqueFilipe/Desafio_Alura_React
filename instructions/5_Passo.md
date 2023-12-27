# Passo 5

Olá, pessoas!

Tudo certo por aí? Essa já é a reta final!

O último desafio foi enviar uma confirmação de e-mail para os endereços cadastrados. Antes disso, você tinha utilizado os *React Hooks* para adicionar funcionalidades no seu projeto.

Você fez tudo isso muito em pouco tempo, parabéns! E ainda tem mais.

Acabam de chegar mais requisitos da área de negócios e você vai precisar mudar um pouco a maneira de apresentar os produtos na página.

A **seção de ofertas** de um site é uma das mais importantes, concorda? O nosso bolso agradece!

A equipe comercial atualmente não consegue configurar quais são as plantas que devem aparecer nessa página. Atualmente, os nomes, valores e imagens da sessão de ofertas estão estáticos.

Você vai melhorar isso.

Todas as áreas da tecnologia se conectam. Muitas dependem de outras. É o seu caso enquanto Dev Front-end.

Hoje, você vai **conectar a sua aplicação com um Back-end.** Ele irá fornecer a lista de plantas que devem aparecer na sessão de ofertas.

Você vai precisar fazer uma requisição para essa [**URI**](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZnaXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRmJ1Z2FuJTJGNDFkNjBmZmEyM2ZhMGM0MDQ0Y2MxMzhiZjY3MDc4MGQlMkZyYXc=&sig=53ES3moJRAUePUSggBMfjSXoWFXeoSXiEPfFroFZQT6r&iat=1673607963&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1220A7618A12A8403) e, depois de consumir os dados, deve exibir as informações das plantas de acordo.

**Atenção!** Nessa API, você terá acesso a um valor um valor de estoque, e não faz sentido exibir as plantas que estejam fora de estoque na área de ofertas. A equipe comercial também não quer que sejam exibidas mais de seis ofertas por vez.

<hr/>

### **DICA**

Se você separou os seus componentes corretamente, a exibição de informações deve ser bem simples.

Também pensando na separação de responsabilidades, o código que faz a chamada para a API não deve ficar junto do código do componente, já que a chamada para a API pode ser reutilizada em outras partes da aplicação.

E para o exercício de hoje, você irá novamente usar a [Fetch API](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRmNvbWVjYW5kby1jb20tZmV0Y2gtbm8tamF2YXNjcmlwdA==&sig=69x4uqAFyPpZoySmznPbXXxCiNwbvzj3qNRZrhDDhv84&iat=1673607963&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1220A7618A12A8963) do JS para consumir os dados dessa API. No caso de hoje, você precisará usar o [Verbo HTTP de GET](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRm1ldG9kb3MtZGUtcmVxdWlzaWNhby1kby1odHRw&sig=53FFNoG7mEuV185CbTpepMfYXchZgEKm7da4VkF72iNq&iat=1673607963&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1220A7618A12A8964) já que a ideia é receber as informações do servidor.

<hr/>

### **EXTRA**

Caso você queira subir uma API para continuar treinando, mas não tenha conhecimentos de Back-end, o [JSON Server](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRm1vY2thbmRvLWFwaXMtcmVzdC1jb20tanNvbi1zZXJ2ZXI=&sig=9V1v8YpRjsTrA1h4DhymNQ25rP8hLR5bbisSdbb77qU2&iat=1673607963&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1220A7618A12A8404) é uma ótima opção para que você tenha uma API simples e funcional para criar seu projeto.

Se você está em um projeto em produção, um dos problemas comuns que enfrentamos no início é o [erro de CORS.](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRmNvbW8tcmVzb2x2ZXItZXJyby1kZS1jcm9zcy1vcmlnaW4tcmVzb3VyY2Utc2hhcmluZw==&sig=3iezMh8568Q3PRi8aFvVdCNimL4rBsFh9JBvkpS3zZeY&iat=1673607963&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1220A7618A12A8405) Nesse artigo você pode conhecer um pouco mais sobre ele.
E claro, não se esqueça de usar a hashtag #7DaysOfCode para compartilhar no seu GitHub e nas suas redes sociais o que você desenvolveu, e você pode usar também a #feedback7DoC caso queira alguma ajuda.

Bons estudos!

Mario Souto
Instrutor Front-end na Alura

<hr/>

[Passo 6](./instructions/6_Passo.md)

[Passo 4](./instructions/4_Passo.md)

[Principal](./../README.md)