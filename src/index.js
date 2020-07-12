$feature-flags: (
  ui-shell: true,
  grid-columns-16: true,
);

@import 'carbon-components/scss/globals/scss/styles.scss';

// Remove overrides once Carbon bugs are fixed upstream.

/// The React <Content /> component uses the `main` element which IE11 doesn't recognize
/// @link https://github.com/carbon-design-system/carbon/issues/2789
main {
  display: block;
}

/// Need grid option to not add page gutters at large viewports, to also use when nesting grids
/// @link https://github.com/carbon-design-system/carbon/issues/2792
@media (min-width: 42rem) {
  .bx--grid--no-gutter {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/// Padding was introduced in 10.3.0, needs an option to let grid set the viewport gutter
/// @link https://github.com/carbon-design-system/carbon/issues/3010
.bx--content {
  padding: 0;
}
