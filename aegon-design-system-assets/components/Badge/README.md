# Badge

Selo curto de estado. Os estados do ciclo financeiro têm cor, ícone e rótulo fixos, para que ninguém confunda rascunho com aprovado.

**Props.** `status` (`draft`, `pending`, `committed`, `approved`, `paid`, `exception`, `scenario`, `cancelled`) aplica tom e rótulo padrão; ou `tone` (`neutral`, `success`, `warning`, `danger`, `info`, `scenario`) com texto em `children`. `icon` troca o ícone; `icon={false}` usa um ponto.

**Regras.** A cor nunca carrega o significado sozinha: o rótulo e o ícone acompanham sempre. Uma ou duas palavras. Não use badge como botão nem como decoração.
