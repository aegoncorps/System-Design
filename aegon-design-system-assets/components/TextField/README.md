# TextField

Campo de texto com rótulo, ajuda e erro. Rótulo sempre acima e visível; o placeholder só dá um exemplo.

**Props.** `label`, `hint`, `error` (substitui a ajuda e marca `aria-invalid`), `prefix` / `suffix` (ex.: “R$”, “%”), `required`, e atributos de `<input>`.

**Regras.** Mostre o mínimo para começar e peça o resto depois (preenchimento progressivo). Valores monetários: `prefix="R$"`, `inputMode="decimal"`, formato brasileiro. Mensagem de erro diz o que aconteceu e como resolver, sem pedir desculpas.
