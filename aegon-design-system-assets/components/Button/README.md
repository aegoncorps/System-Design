# Button

Botão em pílula: a forma que a marca promete em “Tudo se resolve no mesmo botão”. Toda ação clicável que não é link é um `Button`.

**Variantes.** `primary` (`ui-blue`): no máximo uma por área de foco, para a ação que a tela existe para fazer. `secondary`: ações alternativas (Exportar, Devolver). `ghost`: ações de baixa ênfase dentro de cartões e linhas. `danger` (`danger-solid`): só para ações destrutivas ou de reprovação, sempre com confirmação.

**Tamanhos.** `sm` 32px em tabelas e cartões densos; `md` 40px padrão; `lg` 48px para o CTA principal e mobile.

**Props.** `variant`, `size`, `icon` / `iconRight` (nome de ícone Lucide do sistema), `loading`, `disabled`, mais qualquer atributo de `<button>`. O texto vem em `children`.

**Texto.** Verbo no infinitivo + objeto, em sentence case: “Aprovar orçamento”, “Registrar despesa”. O mesmo verbo segue no toast e no estado seguinte (Aprovar → “Aprovado”). Nunca “Clique aqui”, “OK” ou “Enviar” genérico.

**Não fazer.** Botões quadrados ou com `radius-md`; dois primários lado a lado; ícone sem texto sem `aria-label`.
