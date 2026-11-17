# Alert

Mensagem em linha sobre o estado de uma tela ou item. **Adição intencional:** não estava nos materiais de origem, mas os estados Exceção e Aguardando precisam de uma forma de aviso fora da tabela.

**Props.** `tone` (`info`, `success`, `warning`, `danger`, `scenario`), `title`, `children`, `action` (um `Button` `sm`).

**Regras.** Título diz o fato; corpo diz o número ou a causa; ação diz o próximo passo. `danger` usa `role="alert"`; os demais `role="status"`.
