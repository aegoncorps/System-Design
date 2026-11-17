# OnSwitch

Interruptor liga/desliga desenhado a partir do símbolo ON: trilho em pílula, botão circular e a palavra “on” em VomZom quando ligado. É o componente-assinatura da marca dentro do produto.

**Use para** configurações que têm efeito imediato (habilitar módulo, alçada automática, notificações). Para escolhas que só valem ao salvar um formulário, use checkbox ou select.

**Props.** `checked` + `onChange(next)` (controlado) ou `defaultChecked`; `label` (sempre visível, descreve o que fica ligado); `disabled`.

**Regras.** Ligado = `ui-blue` com botão `on-primary`; desligado = `surface-muted` com botão `line-strong`. O rótulo diz a coisa, não o estado (“Alçada automática”, não “Ativar alçada”). O switch expõe `role="switch"` e `aria-checked`.
