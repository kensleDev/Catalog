export function flyInSequence(
  i: number,
  opts: { delay: number; x: number; y: number; offset: number } = {
    delay: 500,
    x: -200,
    y: 0,
    offset: 0,
  }
) {
  return {
    delay: opts.delay * i + opts.offset,
    durartion: 350,
    x: opts.x,
    y: opts.y,
  };
}
