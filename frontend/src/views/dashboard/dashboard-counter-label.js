import { html, css, LitElement } from 'lit';


/**
 * `dashboard-counter-label`
 *
 * Componente customizado baseado em **LitElement** usado para exibir:
 * - Um **gráfico ou elemento visual** no topo (`<slot>`).
 * - Um **contador numérico em destaque** (elemento com id `count`).
 * - Um **título** (elemento `<h4>`).
 * - Um **subtítulo** (elemento `subtitle`).
 *
 * ### Estilização
 * O estilo do número (`.count-digit`) muda de acordo com a classe aplicada ao host:
 * - `.green` → verde (#55bf3b)
 * - `.red` → vermelho (#ff473a)
 * - `.blue` → azul (#1877f3)
 * - `.gray` → cinza translúcido
 *
 * ### Slots
 * - `<slot>` → permite inserir conteúdo (ex.: gráficos) no topo do card.
 *
 * ### Exemplo de uso
 * ```html
 * <dashboard-counter-label class="green">
 *   <my-chart-element></my-chart-element>
 * </dashboard-counter-label>
 * ```
 * */

class DashboardCounterLabel extends LitElement {
  static get styles() {
    return css`
      :host {
        position: relative;
        text-align: center;
        height: calc(18vh - 64px);
        min-height: 180px;
        display: block;
      }

      :host(.green) .count-digit {
        color: #55bf3b;
      }

      :host(.red) .count-digit {
        color: #ff473a;
      }

      :host(.blue) .count-digit {
        color: #1877f3;
      }

      :host(.gray) .count-digit {
        color: rgba(45, 71, 105, 0.7);
      }

      .content {
        padding: 10px;
      }

      .count-wrapper {
        display: block;
        text-align: center;
        padding-top: 12px;
        margin-bottom: 18px;
      }

      .count-digit {
        font-size: 44px;
      }

      .subtitle {
        color: var(--lumo-secondary-text-color);
        font-size: 14px;
      }

      h4 {
        margin: 0;
      }

      .chart-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 120px;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="chart-wrapper">
        <slot></slot>
      </div>

      <div class="content">
        <div class="count-wrapper">
          <span id="count" class="count-digit"></span>
        </div>

        <h4 id="title"></h4>
        <div id="subtitle" class="subtitle"></div>
      </div>
    `;
  }

  static get is() {
    return 'dashboard-counter-label';
  }
}

customElements.define(DashboardCounterLabel.is, DashboardCounterLabel);
