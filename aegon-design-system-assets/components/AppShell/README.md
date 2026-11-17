# AppShell

Estrutura de produto Aegon (versão Hybrid): barra lateral fixa em `shell` com o logo para fundo escuro, barra superior em `surface` e área de trabalho em `canvas`.

**Props.** `nav` (grupos `{label, items:[{value,label,icon,badge?}]}`), `active`, `onNavigate(value)`, `product` (tag curta ao lado do logo), `eyebrow`, `title`, `actions`, `children`.

**Regras.** Agrupe a navegação pelo que a pessoa quer fazer (Planejar, Executar, Decidir, Analisar, Administrar), não por nome técnico de módulo. O shell não se move: sincronização e carregamento nunca deslocam controles. Abaixo de 720px a lateral some e o produto deve oferecer um menu.
