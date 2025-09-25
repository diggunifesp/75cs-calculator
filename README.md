# 75+ Cancer Screener (75+CS)

Ferramenta web estática para apoiar o rastreio de fragilidade e a estimativa de risco (Lee / Deardorff), com fluxo de decisão e materiais educativos.

# Site (GitHub Pages)
Produção: https://matthurricane.github.io/75cs-calculator/

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
```bash
python -m http.server 8000
# acesse http://localhost:8000

# Versões e Releases
Padrão SemVer:
- `v1.0.0` – versão estável inicial (CSS/JS internalizados; atribuição da CFS no site; imagens referenciadas por arquivo)

Crie um release: **Releases → Draft a new release → Tag `vX.Y.Z` → Publish**.

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
