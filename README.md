# 75+ Cancer Screener (75+CS)

Ferramenta web estática para apoiar o rastreio de fragilidade e a estimativa de risco (Lee / Deardorff), com fluxo de decisão e materiais educativos.

# Site (GitHub Pages)
Produção: https://bit.ly/75cs-calculator

# Estrutura

index.html
assets/
  img/
    flowchart-en.png
    cfs.png                     # Clinical Frailty Scale (material de terceiros; ver "Licenças")
    healthy-eating.png
    physical-activity.png
    cognitive-stimulation.png
  site.css
  site.js

# Publicação (deploy)
1. Faça alterações em `index.html` ou em `assets/`.
2. Commit na branch `main`.
3. O GitHub Pages publica automaticamente (Settings → Pages → Deployments).

# Desenvolvimento local
Abra `index.html` no navegador **ou** rode um servidor simples:
bash
python -m http.server 8000
# acesse http://localhost:8000

# Versões e Releases
Padrão SemVer:
- `v1.0.0` – versão estável inicial (CSS/JS internalizados; atribuição da CFS no site; imagens referenciadas por arquivo)

Crie um release: **Releases → Draft a new release → Tag `vX.Y.Z` → Publish**.

# Roadmap
- Aumentar a fonte dos textos, responsivo para o tamanho de tela.
- Escolha do CFS em radio buttons ou outra opção mais funcional que a atual
- Colocar o fluxograma na vertical se a largura da tela é pequena (celular)
- UI mais dinâmica e visual, com ícones para representar os campos/perguntas
- Resultado final com link de direcionamento para uma página mais completa de recomendações (que pode ser de terceiros) sobre saúde, não só os ícones.
- Bloquear os campos de peso e altura para valores positivos (bloquear negativos) e uma faixa máxima, como uma altura não maior que 3m, um peso não maior que 400kg.
- Tooltip ou janela com informações para ajudar preencher os ADL e IADL
- Ajustes de fórmulas do cálculo de risco (atualmente "former smoker" afeta mais o risco de mortalidade que o "current smoker" no índice de Deardorff)
- Informações sobre coleta do número de usos da plataforma.

# Disclaimer:
Esta calculadora é fornecida apenas para fins educacionais e informativos e não substitui julgamento clínico, diretrizes oficiais ou aconselhamento médico. Nenhuma garantia é oferecida quanto à exatidão ou adequação a um propósito específico.

# Licenças
- **Código**: MIT (ver [`LICENSE`](LICENSE))
- **Conteúdo próprio** (textos/imagens autorais do projeto): CC BY 4.0 (ver [`LICENSE-content`](LICENSE-content))
- **Materiais de terceiros**:
  - `assets/img/cfs.png` (Clinical Frailty Scale) — **usado com permissão** do detentor dos direitos; **não** está coberto pelas licenças MIT/CC deste repositório e **não** deve ser redistribuído. Detalhes em [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

# Atribuição (no site)
Ao entrar no link da CFS para visualizar a imagem:
Source: Geriatric Medicine Research — Dalhousie University, Clinical Frailty Scale.
