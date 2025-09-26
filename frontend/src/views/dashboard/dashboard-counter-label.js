import { html, css, LitElement } from 'lit';

/**
 * `dashboard-counter-label`
 *
 * Custom component based on **LitElement** used to display:
 * - A **visual element or chart** at the top (`<slot>`).
 * - A **highlighted numeric counter** (element with id `count`).
 * - A **title** (element `<h4>`).
 * - A **subtitle** (element `subtitle`).
 *
 * ### Styling
 * The style of the number (`.count-digit`) changes according to the class applied to the host:
 * - `.green` → green (#55bf3b)
 * - `.red` → red (#ff473a)
 * - `.blue` → blue (#1877f3)
 * - `.gray` → translucent gray
 *
 * ### Slots
 * - `<slot>` → allows inserting content (e.g., charts) at the top of the card.
 *
 * ### Example usage
 * ```html
 * <dashboard-counter-label class="green">
 *   <my-chart-element></my-chart-element>
 * </dashboard-counter-label>
 * ```
 *
 * @element dashboard-counter-label
 * @csspart chart-wrapper - The wrapper for slot content (visual/chart)
 * @csspart count-digit - The numeric counter styling
 * @csspart subtitle - The subtitle section
 * @slot - Place for a chart or visual element at the top
 * @summary A LitElement-based counter label card for dashboards.
 */
class DashboardCounterLabel extends LitElement {
  /**
   * Returns the styles applied to this component.
   * @returns {CSSResult}
   */
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

  /**
   * Renders the component's HTML template.
   * @returns {import('lit').TemplateResult}
   */
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

  /**
   * The tag name for this custom element.
   * @type {string}
   * @readonly
   */
  static get is() {
    return 'dashboard-counter-label';
  }
}

customElements.define(DashboardCounterLabel.is, DashboardCounterLabel);