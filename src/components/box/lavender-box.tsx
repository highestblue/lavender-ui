import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';

export type Border = 'none' | 'thin' | 'normal' | 'thick';
export type Depth = 'none' | 'shallow' | 'normal' | 'deep';

@Component({
  tag: 'lavender-box',
  styleUrl: 'lavender-box.css',
  shadow: true,
})
export class LavenderBox {
  /* Border */
  @Prop() border: Border = 'none';

  /* Depth */
  @Prop() depth: Depth = 'none';

  render() {
    const classes = classNames([`border--${this.border}`, `depth--${this.depth}`]);
    return (
      <Host class={classes}>
        <slot></slot>
      </Host>
    );
  }
}
