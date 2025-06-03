Concepts

# Patterns

Patterns are layout primitives that can be used to create robust and responsive layouts with ease. Panda comes with
predefined patterns like stack, hstack, vstack, wrap, etc. These patterns can be used as functions or JSX elements.

💡

Think of patterns as a set of predefined styles to reduce repetition and improve readability. You can override the properties as needed, just like in the `css` function.

## Creating Patterns [Permalink for this section](https://panda-css.com/docs/concepts/patterns#creating-patterns)

To learn how to create patterns, check out the [customization](https://panda-css.com/docs/customization/patterns) section.

## Predefined Patterns [Permalink for this section](https://panda-css.com/docs/concepts/patterns#predefined-patterns)

### Box [Permalink for this section](https://panda-css.com/docs/concepts/patterns#box)

The Box pattern does not contain any additional styles. With its function form it's the equivalent of the `css` function. It can be useful with its JSX form and is the equivalent of a `styled.div` component, serving mostly to get style props available in JSX.

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Box } from '../styled-system/jsx'

function App() {
  return (
    <Box color="blue.300">
      <div>Cool !</div>
    </Box>
  )
}
```

### Container [Permalink for this section](https://panda-css.com/docs/concepts/patterns#container)

The Container pattern is used to create a container with a max-width and center the content.

By default, the container sets the following properties:

- `maxWidth: 8xl`
- `marginX: auto`
- `position: relative`
- `paddingX: { base: 4, md: 6, lg: 8 }`

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { container } from '../styled-system/patterns'

function App() {
  return (
    <div className={container()}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Container } from '../styled-system/jsx'

function App() {
  return (
    <Container>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Container>
  )
}
```

### Stack [Permalink for this section](https://panda-css.com/docs/concepts/patterns#stack)

The Stack pattern is a layout primitive that can be used to create a vertical or horizontal stack of elements.

The `stack` function accepts the following properties:

- `direction`: An alias for the css `flex-direction` property. Default is `column`.
- `gap`: The gap between the elements in the stack.
- `align`: An alias for the css `align-items` property.
- `justify`: An alias for the css `justify-content` property.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { stack } from '../styled-system/patterns'

function App() {
  return (
    <div className={stack({ gap: '6', padding: '4' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Stack } from '../styled-system/jsx'

function App() {
  return (
    <Stack gap="6" padding="4">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Stack>
  )
}
```

#### HStack [Permalink for this section](https://panda-css.com/docs/concepts/patterns#hstack)

The HStack pattern is a wrapper around the `stack` pattern that sets the `direction` property to `horizontal`, and
centers the elements vertically.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { hstack } from '../styled-system/patterns'

function App() {
  return (
    <div className={hstack({ gap: '6' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { HStack } from '../styled-system/jsx'

function App() {
  return (
    <HStack gap="6">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </HStack>
  )
}
```

#### VStack [Permalink for this section](https://panda-css.com/docs/concepts/patterns#vstack)

The VStack pattern is a wrapper around the `stack` pattern that sets the `direction` property to `vertical`, and centers
the elements horizontally.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { vstack } from '../styled-system/patterns'

function App() {
  return (
    <div className={vstack({ gap: '6' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { VStack } from '../styled-system/jsx'

function App() {
  return (
    <VStack gap="6">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </VStack>
  )
}
```

### Wrap [Permalink for this section](https://panda-css.com/docs/concepts/patterns#wrap)

The Wrap pattern is used to add space between elements and wraps automatically if there isn't enough space.

The `wrap` function accepts the following properties:

- `gap`: The gap between the elements in the stack.
- `columnGap`: The gap between the elements in the stack horizontally.
- `rowGap`: The gap between the elements in the stack vertically.
- `align`: An alias for the css `align-items` property.
- `justify`: An alias for the css `justify-content` property.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { wrap } from '../styled-system/patterns'

function App() {
  return (
    <div className={wrap({ gap: '6' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Wrap } from '../styled-system/jsx'

function App() {
  return (
    <Wrap gap="6">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Wrap>
  )
}
```

### Aspect Ratio [Permalink for this section](https://panda-css.com/docs/concepts/patterns#aspect-ratio)

The Aspect Ratio pattern is used to create a container with a fixed aspect ratio. It is used when displaying images,
maps, videos and other media.

💡

**Note:** In most cases, we recommend using the `aspectRatio` property instead of the pattern.

The `aspectRatio` function accepts the following properties:

- `ratio`: The aspect ratio of the container. Can be a number or a string.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { aspectRatio } from '../styled-system/patterns'

function App() {
  return (
    <div className={aspectRatio({ ratio: 16 / 9 })}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m1"
        title="Google map"
        frameBorder="0"
      />
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { AspectRatio } from '../styled-system/jsx'

function App() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m1"
        title="Google map"
        frameBorder="0"
      />
    </AspectRatio>
  )
}
```

### Flex [Permalink for this section](https://panda-css.com/docs/concepts/patterns#flex)

The Flex pattern is used to create a flex container and provides some shortcuts for the `flex` property.

The `flex` function accepts the following properties:

- `direction`: The flex direction of the container. Can be `row`, `column`, `row-reverse` or `column-reverse`.
- `wrap`: Whether to wrap the flex items. The value is a boolean.
- `align`: An alias for the css `align-items` property.
- `justify`: An alias for the css `justify-content` property.
- `basis`: An alias for the css `flex-basis` property.
- `grow`: An alias for the css `flex-grow` property.
- `shrink`: An alias for the css `flex-shrink` property.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { flex } from '../styled-system/patterns'

function App() {
  return (
    <div className={flex({ direction: 'row', align: 'center' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Flex } from '../styled-system/jsx'

function App() {
  return (
    <Flex direction="row" align="center">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Flex>
  )
}
```

### Center [Permalink for this section](https://panda-css.com/docs/concepts/patterns#center)

The Center pattern is used to center the content of a container.

The `center` function accepts the following properties:

- `inline`: Whether to use `inline-flex` or `flex` for the container. The value is a boolean.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { center } from '../styled-system/patterns'

function App() {
  return (
    <div className={center({ bg: 'red.200' })}>
      <Icon />
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Center } from '../styled-system/jsx'

function App() {
  return (
    <Center bg="red.200">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Center>
  )
}
```

### LinkOverlay [Permalink for this section](https://panda-css.com/docs/concepts/patterns#linkoverlay)

The link overlay pattern is used to expand a link's clickable area to its nearest parent with `position: relative`.

💡

We recommend using this pattern when the relative parent contains at most one clickable link.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { css } from '../styled-system/css'
import { linkOverlay } from '../styled-system/patterns'

function App() {
  return (
    <div className={css({ pos: "relative" })}>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <a href="#" className={linkOverlay()}>
        View more
      </a>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Box, LinkOverlay } from '../styled-system/jsx'

function App() {
  return (
    <Box pos="relative">
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <LinkOverlay href="#">
        View more
      </LinkOverlay>
    </Box>
  )
}
```

### Float [Permalink for this section](https://panda-css.com/docs/concepts/patterns#float)

The Float pattern is used to anchor an element to the top, bottom, left or right of the container.

💡

It requires a parent element with `position: relative` styles.

The `float` function accepts the following properties:

- `placement`: The placement of the element. Can be `top-start`, `top`, `top-end`, `bottom-start`, `bottom`,
  `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right` or `right-end`.
- `offset`: The offset of the element from the edge of the container. Can be a number or a string.
- `offsetX`: Same as `offset`, but only for the horizontal axis.
- `offsetY`: Same as `offset`, but only for the vertical axis.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { css } from '../styled-system/css'
import { float } from '../styled-system/patterns'

function App() {
  return (
    <div className={css({ position: 'relative' })}>
      <div className={float({ placement: 'top-start' })}>3</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { css } from '../styled-system/css'
import { Float } from '../styled-system/jsx'

function App() {
  return (
    <div className={css({ position: 'relative' })}>
      <Float placement="top-start">3</Float>
    </div>
  )
}
```

### Grid [Permalink for this section](https://panda-css.com/docs/concepts/patterns#grid)

The Grid pattern is used to create a grid layout.

The `grid` function accepts the following properties:

- `columns`: The number of columns in the grid.
- `gap`: The gap between the elements in the stack.
- `columnGap`: The gap between the elements in the stack horizontally.
- `rowGap`: The gap between the elements in the stack vertically.
- `minChildWidth`: The minimum width of the child elements before wrapping (must not be used with `columns`).

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { grid } from '../styled-system/patterns'

function App() {
  return (
    <div className={grid({ columns: 3, gap: '6' })}>
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Grid } from '../styled-system/jsx'

function App() {
  return (
    <Grid columns={3} gap="6">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
    </Grid>
  )
}
```

#### Grid Item [Permalink for this section](https://panda-css.com/docs/concepts/patterns#grid-item)

The Grid Item pattern is used to style the children of a grid container.

The `gridItem` function accepts the following properties:

- `colSpan`: The number of columns the item spans.
- `rowSpan`: The number of rows the item spans.
- `rowStart`: The row the item starts at.
- `rowEnd`: The row the item ends at.
- `colStart`: The column the item starts at.
- `colEnd`: The column the item ends at.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { grid, gridItem } from '../styled-system/patterns'

function App() {
  return (
    <div className={grid({ columns: 3, gap: '6' })}>
      <div className={gridItem({ colSpan: 2 })}>First</div>
      <div>Second</div>
      <div>Third</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Grid, GridItem } from '../styled-system/jsx'

function App() {
  return (
    <Grid columns={3} gap="6">
      <GridItem colSpan={2}>First</GridItem>
      <GridItem>Second</GridItem>
      <GridItem>Third</GridItem>
    </Grid>
  )
}
```

### Divider [Permalink for this section](https://panda-css.com/docs/concepts/patterns#divider)

The Divider pattern is used to create a horizontal or vertical divider.

The `divider` function accepts the following properties:

- `orientation`: The orientation of the divider. Can be `horizontal` or `vertical`.
- `thickness`: The thickness of the divider. Can be a sizing token, or arbitrary value.
- `color`: The color of the divider. Can be a color token, or arbitrary value.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { divider, stack } from '../styled-system/patterns'

function App() {
  return (
    <div className={stack()}>
      <button>First</button>
      <div className={divider({ orientation: 'horizontal' })} />
      <button>Second</button>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Divider, Stack } from '../styled-system/jsx'

function App() {
  return (
    <Stack>
      <button>First</button>
      <Divider orientation="horizontal" />
      <button>Second</button>
    </Stack>
  )
}
```

### Circle [Permalink for this section](https://panda-css.com/docs/concepts/patterns#circle)

The Circle pattern is used to create a circle.

The `circle` function accepts the following properties:

- `size`: The size of the circle. Can be a sizing token, or arbitrary value.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { circle } from '../styled-system/patterns'

function App() {
  return <div className={circle({ size: '12', bg: 'red.300' })} />
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Circle } from '../styled-system/jsx'

function App() {
  return <Circle size="12" bg="red.300" />
}
```

### Square [Permalink for this section](https://panda-css.com/docs/concepts/patterns#square)

The Square pattern is used to create a square with equal width and height.

The `square` function accepts the following properties:

- `size`: The size of the square. Can be a sizing token, or arbitrary value.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { square } from '../styled-system/patterns'

function App() {
  return <div className={square({ size: '12', bg: 'red.300' })} />
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { Square } from '../styled-system/jsx'

function App() {
  return <Square size="12" bg="red.300" />
}
```

### Visually Hidden [Permalink for this section](https://panda-css.com/docs/concepts/patterns#visually-hidden)

The Visually Hidden pattern is used to hide an element visually, but keep it accessible to screen readers.

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { visuallyHidden } from '../styled-system/patterns'

export function Checkbox() {
  return (
    <label>
      <input type="checkbox" className={visuallyHidden()}>
        I'm hidden
      </input>
      <span>Checkbox</span>
    </label>
  )
}
```

### Bleed [Permalink for this section](https://panda-css.com/docs/concepts/patterns#bleed)

The Bleed pattern is used to create a full width element by negating the padding applied to its parent container.

The `bleed` function accepts the following properties:

- `inline`: The amount of padding to negate on the horizontal axis. Should match the parent's padding.
- `block`: The amount of padding to negate on the vertical axis. Should match the parent's padding.

FunctionJSX

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { css } from '../styled-system/css'
import { bleed } from '../styled-system/patterns'

export function Page() {
  return (
    <div className={css({ px: '6' })}>
      <div className={bleed({ inline: '6' })}>Welcome</div>
    </div>
  )
}
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { css } from '../styled-system/css'
import { Bleed } from '../styled-system/jsx'

export function Page() {
  return (
    <div className={css({ px: '6' })}>
      <Bleed inline="6">Welcome</div>
    </div>
  )
}
```

### cq (Container Query) [Permalink for this section](https://panda-css.com/docs/concepts/patterns#cq-container-query)

To make it easier to use container queries, we've added a new `cq` pattern to `@pandacss/preset-base`. It is used to apply styles based on the width of the container.

The `cq` function accepts the following properties:

- `name`: The name of the container query, Maps to the [`containerName` CSS property (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name).
- `type`: The type of the container query. Maps to the [`containerType` CSS property (opens in a new tab)](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type). Defaults to `inline-size`.

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { cq } from 'styled-system/patterns'

function Demo() {
  return (
    <nav className={cq()}>
      <div
        className={css({
          fontSize: { base: 'lg', '@/sm': 'md' },
        })}
      />
    </nav>
  )
}
```

You can also named container queries:

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
// 1 - Define container conditions

export default defineConfig({
  // ...
  theme: {
    containerNames: ['sidebar', 'content'],
    containerSizes: {
      xs: '40em',
      sm: '60em',
      md: '80em',
    },
  },
})
```

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
// 2 - Automatically generate container query pattern

import { cq } from 'styled-system/patterns'

function Demo() {
  return (
    <nav className={cq({ name: 'sidebar' })}>
      <div
        className={css({
          // When the sidebar container reaches the `sm` size
          // change font size to `md`
          fontSize: { base: 'lg', '@sidebar/sm': 'md' },
        })}
      />
    </nav>
  )
}
```

Read more about container queries [here](https://panda-css.com/docs/concepts/conditional-styles#container-queries).

## Usage with JSX [Permalink for this section](https://panda-css.com/docs/concepts/patterns#usage-with-jsx)

To use the pattern in JSX, you need to set the `jsxFramework` property in the config. When this is set, Panda will emit
files for JSX elements based on the framework.

Every pattern can be used as a JSX element and imported from the `/jsx` entrypoint. By default, the pattern name is the
function name in PascalCase. You can override both the component name (with the `jsx` config property) and the element rendered (with the `jsxElement` config property).

Learn more about pattern customization [here](https://panda-css.com/docs/customization/patterns).

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { VStack, Center } from '../styled-system/jsx'

function App() {
  return (
    <VStack gap="6" mt="4">
      <div>First</div>
      <div>Second</div>
      <div>Third</div>
      <Center>4</Center>
    </VStack>
  )
}
```

### Advanced JSX Tracking [Permalink for this section](https://panda-css.com/docs/concepts/patterns#advanced-jsx-tracking)

We recommend that you use the pattern functions in most cases, in design systems there might be a need to compose existing components to create new components.

To track the usage of the patterns in these cases, you'll need to add the `jsx` hint for the pattern config

button.pattern.ts

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
import { definePattern } from '@pandacss/dev'

const scrollable = definePattern({
  // ...
  // Add the jsx hint to track the usage of the pattern in JSX, you can also use a regex to match multiple components
  jsx: ['Scrollable', 'PageScrollable']
})
```

Then you can create a new component that uses the `PageScrollable` component and Panda will track the usage of the `scrollable` pattern as well.

```bd-w_1px bd-c_rgba(0,_0,_0,_0.04) dark:bd-c_rgba(255,_255,_255,_0.1) bg_rgba(0,_0,_0,_0.03) dark:bg_rgba(255,_255,_255,_0.1) ov-wrap_break-word ff_mono bdr_md py_0.5 px_0.25em fs_0.9em
const PageScrollable = (props: ButtonProps) => {
  const { children, size } = props
  return (
    <Scrollable {...props} size={size}>
      {children}
    </Scrollable>
  )
}
```

Last updated on November 1, 2024

[Virtual Color](https://panda-css.com/docs/concepts/virtual-color "Virtual Color") [Recipes](https://panda-css.com/docs/concepts/recipes "Recipes")
