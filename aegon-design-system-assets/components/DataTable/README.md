# DataTable

Tabela densa para leitura de valores. Cabeçalho em `surface-muted`, linhas separadas por `line`, números alinhados à direita em `tabular-nums`.

**Props.** `columns` (`{key,label,align?:"right",render?(row)}`), `rows` (objetos; `id` vira a key), `caption`.

**Regras.** Coluna de identificação à esquerda com título + código em `ag-cell-sub`. Estado sempre por `Badge`. A ação da linha é um `Button` `ghost` `sm` com o próximo passo (“Decidir”, “Justificar”). Em telas estreitas a tabela rola dentro do próprio contêiner.
