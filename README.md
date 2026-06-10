# SWIP — Site Institucional

Site institucional desenvolvido para a **SWIP**, empresa de engenharia e infraestrutura localizada em Cachoeirinha - RS.

O projeto tem como objetivo apresentar a empresa, destacar seus principais serviços, exibir parceiros atendidos, informar a localização, facilitar o contato comercial e direcionar clientes para solicitação de orçamento via WhatsApp.

## Descrição do projeto

Este site foi desenvolvido com foco em uma apresentação moderna, responsiva e profissional da SWIP.

A interface utiliza uma identidade visual em tons escuros com detalhes em azul, transmitindo tecnologia, engenharia, inovação e confiança. O projeto foi construído com **HTML, CSS e JavaScript puro**, priorizando performance, responsividade, facilidade de manutenção e boa experiência para o usuário.

A página inicial conta com um carrossel principal de apresentação, seções de serviços, parceiros, localização, chamada para orçamento e rodapé institucional. Também foram criadas páginas individuais para detalhar melhor cada serviço oferecido pela empresa.

## Funcionalidades

- Header fixo com navegação por seções
- Logo personalizada da SWIP com efeito visual no hover
- Menu mobile com botão hamburguer
- Carrossel principal automático
- Botões “Saiba mais” direcionando para páginas específicas
- Imagens clicáveis no carrossel principal
- Seção de serviços com links para páginas individuais
- Carrossel automático de parceiros/clientes
- Botão para visualizar todos os parceiros
- Modo de acessibilidade com redução de animações e efeitos visuais
- Botão flutuante do WhatsApp
- Seção de localização e área de atendimento
- Footer com links rápidos, serviços e contatos
- Layout responsivo para desktop, tablet e celular
- SEO básico configurado no HTML
- Estrutura preparada para indexação em buscadores
- Deploy realizado pela Vercel

## Serviços apresentados

O site apresenta os principais serviços oferecidos pela SWIP:

- Engenharia elétrica
- Infraestrutura lógica
- Construção civil
- Reformas e adequações
- Cabeamento estruturado
- Redes corporativas
- Obras comerciais e industriais
- Manutenção elétrica
- Soluções técnicas para empresas, obras e indústrias

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts
- WhatsApp API Link
- Git
- GitHub
- Vercel

## Estrutura do projeto

```txt
/
├── index.html
├── styles.css
├── scripts.js
├── eletrica.html
├── logica.html
├── civil.html
├── infraestrutura.html
├── README.md
├── .gitignore
├── img/
│   ├── Civil.webp
│   ├── Eletrica.webp
│   ├── logica.webp
│   ├── whatsapp/
│   │   └── WhatsApp.svg.png
│   ├── Swip/
│   │   ├── swip.png
│   │   └── favicon.png
│   ├── Accessibility/
│   │   └── acessibility.png
│   └── clientes/
│       ├── alpha-quimica.png
│       ├── DLL_Group_logo.svg.png
│       ├── Logo_Full_Gauge_Controls.png
│       ├── novo-logo-gm.png
│       ├── santa-casa-principal.png
│       ├── SL-logo-vector.png
│       ├── unimed.png
│       ├── tmsa-logo.png
│       └── Sicredi-logo.png
```

## Páginas do projeto

### Página inicial

Arquivo:

```txt
index.html
```

Contém:

- Apresentação inicial da empresa
- Carrossel principal
- Serviços
- Parceiros
- Localização e área de atendimento
- Chamada para orçamento
- Botão flutuante do WhatsApp
- Modo de acessibilidade
- Footer institucional

### Páginas de serviços

Arquivos:

```txt
eletrica.html
logica.html
civil.html
infraestrutura.html
```

Cada página apresenta informações mais detalhadas sobre um serviço específico da SWIP, com chamada para contato comercial via WhatsApp.

## Acessibilidade

O projeto possui recursos de acessibilidade para melhorar a navegação e leitura do site:

- Link “Pular para o conteúdo principal”
- Botão de modo acessível
- Redução de animações e efeitos visuais no modo acessível
- Melhor contraste visual
- Navegação adaptada para leitores de tela
- Atributos `aria-label` em botões importantes
- Textos alternativos em imagens relevantes
- Estrutura semântica com títulos e seções organizadas

## SEO e buscadores

O site possui uma estrutura inicial voltada para indexação em buscadores, incluindo:

- Meta title personalizado
- Meta description
- Meta robots
- Open Graph para compartilhamento em redes sociais
- Favicon personalizado
- Conteúdo com palavras relacionadas aos serviços da empresa
- Páginas individuais para cada serviço
- Estrutura preparada para futuras melhorias com `robots.txt`, `sitemap.xml` e Google Search Console

## Como executar o projeto

Como o projeto foi desenvolvido em HTML, CSS e JavaScript puro, não é necessário instalar dependências.

Basta abrir o arquivo:

```txt
index.html
```

diretamente no navegador.

Também é possível rodar localmente com a extensão **Live Server** no VS Code ou utilizando um servidor local com Python:

```bash
python3 -m http.server 5500
```

Depois, acesse no navegador:

```txt
http://localhost:5500
```

## Deploy

O projeto está preparado para publicação na **Vercel**.

Fluxo de publicação:

```txt
Projeto local → GitHub → Vercel → Domínio oficial
```

Após cada atualização enviada para a branch principal no GitHub, a Vercel realiza o deploy automaticamente.

Comandos básicos para atualizar o projeto:

```bash
git status
git add .
git commit -m "Atualiza site institucional da SWIP"
git push origin main
```

## Melhorias futuras

- Criar painel administrativo para atualização de obras e promoções
- Adicionar formulário de contato
- Criar galeria de projetos realizados
- Adicionar página “Quem Somos”
- Criar seção de depoimentos de clientes
- Melhorar SEO com `sitemap.xml` e `robots.txt`
- Adicionar Google Search Console
- Otimizar imagens para melhor performance
- Adicionar Google Analytics ou ferramenta de métricas
- Criar integração futura com banco de dados
- Criar backend para gerenciamento de conteúdo

## Autor

Projeto desenvolvido por **Pedro Godoy**.

## Contato

📍 Cachoeirinha - RS  
📞 (51) 3041-2993  
📧 comercial02@swip.com.br  

## Licença

Este projeto é de uso institucional da **SWIP**.
