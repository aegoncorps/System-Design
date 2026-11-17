# ApprovalCard

Item da fila de decisões: responde “o que depende de mim agora?” com contexto suficiente para decidir.

**Props.** `kind` (tipo + número), `title`, `impact` (valor formatado), `attachment` (nome da evidência), `sla`, e os callbacks `onApprove`, `onReturn`, `onContext`.

**Regras.** Ordene a fila por urgência (SLA) e impacto. Toda decisão registra ator, motivo e horário; “Devolver” e “Reprovar” pedem motivo. Nenhuma decisão crítica fora do sistema.
