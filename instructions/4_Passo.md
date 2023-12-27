# Passo 4

Olá, pessoas!

Você já chegou na metade do **#7DaysOfCode!** Já entrou no ritmo?

Agora você vai continuar trabalhando a partir da validação e cadastro de e-mail que você fez ontem.

Hoje, a sua missão será focar nos **envios de e-mails para quem se cadastrou em nosso site.**

Todo site profissional que você criar deve ser capaz de enviar um e-mail. Seja a verificação de um usuário, o envio de uma newsletter ou a confirmação de uma compra.

E como esse fluxo funciona? Quais informações são importantes para adicionar essas features nas suas aplicações?

Novamente, vamos voltar ao projeto Casa Verde.

A partir do formulário de cadastro na newsletter, eu quero que você envie uma confirmação de cadastro para o e-mail que foi registrado.

O texto pode ser algo mais ou menos assim:

```txt
"Olá, [nome].

Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.

Até logo!"
```

A minha sugestão é que você utilize o serviço gratuito do [**SendGrid**](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZkb2NzLnNlbmRncmlkLmNvbSUyRnB0LWJyJTJGZm9yLWRldmVsb3BlcnMlMkZzZW5kaW5nLWVtYWlsJTJGYXBpLWdldHRpbmctc3RhcnRlZA==&sig=Gu7gacCPrRkgojDYDj9vtdvh1ashXKMCS5uyZaqaswZX&iat=1673521474&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1219A7617A12A8396), que envia e-mails através de uma chamada para a API deles.

<hr/>

### **DICA**

No serviço da SendGrid ou outros provedores, você terá uma API Key para poder enviar os e-mails.

**Este tipo de chave de autenticação não deve ficar diretamente no código** ou ir para o seu repositório do GitHub, pois isso pode causar problemas de segurança.

A abordagem mais comum nesses casos é adicionar um arquivo **.env** no projeto para salvar essas variáveis de ambiente. Uma lib muito utilizada nessas situações é a dotenv.

<hr/>

### **EXTRA**

O trabalho de hoje lida com dados sensíveis, que não devem ser expostos de maneira indesejada.

Separei um vídeo para você assistir e saber [*como garantir a segurança de uma aplicação*](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cueW91dHViZS5jb20lMkZ3YXRjaCUzRnYlM0RCUDJLUXRDeXpvOA==&sig=Ej547yZPRA8jPTa7wuhkxE2WRpLeTrHPk26GcfYZ5qec&iat=1673521474&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1219A7617A12A8398).

Deixo aqui também um artigo de como o [Fetch API do JS ](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRmNvbWVjYW5kby1jb20tZmV0Y2gtbm8tamF2YXNjcmlwdA==&sig=5opHJ6LQDw1PuodPfcUm2LkCo5Qgcb4PbseEHr4ha3mB&iat=1673521474&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1219A7617A12A8399)funciona e outro sobre [assincronicidade dentro do JS](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRmFzeW5jLWF3YWl0LW5vLWphdmFzY3JpcHQtby1xdWUtZS1lLXF1YW5kby11c2Fy&sig=DYoH6onbHEB24gPtvBTwks3B3Lf14J7YbYn2frkwxTcp&iat=1673521474&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=0JLx7KmpQmhgXHF2MdTOZHQUJJSi4P3dB7BE1Xn5C7M%3D&s=40ad5b79d135932a4d64c024b62306e9&i=1219A7617A12A8400), já que você está trabalhando com uma chamada para um serviço externo à nossa aplicação.
Como sempre, lembre-se de compartilhar os resultados no seu GitHub, LinkedIn e outras redes sociais utilizando **#7DaysOfCode**, e também **#feedback7DoC** caso precise de alguma ajudinha.

Bons estudos!

Mario Souto
Instrutor Front-end na Alura

<hr/>

[Passo 5](./instructions/5_Passo.md)

[Passo 3](./instructions/3_Passo.md)

[Principal](./../README.md)