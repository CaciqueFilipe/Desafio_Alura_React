# Passo 1

Olá, pessoas!

Chegou o seu momento!

Prepare-se para passar os próximos 7 dias praticando Front-end comigo!

Antes de explicar como vai ser o seu primeiro exercício, é importante já dizer:

Uma das tarefas mais comuns para Devs Front-end é implementar um Design de UX em componentes. Ou, simplificando:

Recortar um Figma e implementá-lo no seu React.

Sim. Todo mundo que desenvolve para o Front-end e React acaba passando por isso.

O grande desafio está em manter a sintonia entre o pensamento de quem realiza o design e quem desenvolve o código. É preciso ter uma estrutura limpa e clara.

E a melhor maneira de vencer um desafio é, claro, estudando, pensando e praticando!

Por isso, o seu primeiro desafio do #7DaysOfCode vai ser [pegar o Figma de um projeto](https://www.figma.com/file/0yOQR6fGtbdrmqeStiO0jf/7Days-React?node-id=1%3A2&t=GU3KT7Kx9RlvyEdo-0) e implementar dois componentes. Um leve spoiler:

Aqui já dá para ver o primeiro problema. O que é um componente? Qual é a quebra que eu estava pensando quando pedi dois componentes?

Mas vamos às respostas. O que você deve fazer hoje:

Escreva o componente do menu da aplicação e o componente de assinatura da newsletter. Os dois são compostos de outras partes e, para que o seu código não fique bagunçado, minha sugestão é: separe a aplicação em mais de dois componentes.

Comecei com boas dicas, hein?!

Agora é com você! Encare este desafio e crie as separações de contextos e componentes.
<hr/>

### **DICA**

Lembre-se: os componentes existem para ser utilizados. Por isso, é importante que as informações não estejam "chumbadas" neles.

Depois de criar os componentes, a sua HomePage() - que estará no seu arquivo index.js - terá uma cara mais ou menos assim:

```React
export default function HomePage() {
    return (
          <main>
               <Menu />
               <AssinaturaNewsletter />
          </main>
     );
}
```

Ou seja, os seus componentes estarão, cada um em sua respectiva pasta, dentro de funções com esse jeitão:

```React
export default function Menu() {
    return (
        <header ...>
            ...
        </header>
     );
}
```

E para a newsletter:

```React
export default function AssinaturaNewsletter() {
    return (
         <div>
               ...
         </div>
     );
}
```
<hr/>

### **EXTRA**
Se você quiser saber um pouco mais sobre como eu faria, dá uma olhadinha nesse vídeo no meu canal em que eu passo todas as minhas referências de como organizar uma aplicação React.

Nesse outro artigo, eu falo mais sobre a organização e separação do CSS utilizando o padrão BEM.

E se você quiser dar mais um passo, confira esse artigo de Styled Components lá na Alura e conheça uma ferramenta que te ajuda a ter um menor acoplamento dentro do CSS.
Claro, não se esqueça de usar a hashtag #7DaysOfCode para compartilhar no seu GitHub e nas suas redes sociais o que você desenvolveu, e você pode usar também a #feedback7DoC caso queira alguma ajuda.

Bons estudos!

Mario Souto
Instrutor Front-end na Alura

<hr/>

[Passo 2](./instructions/2_Passo.md)

[Principal](./../README.md)