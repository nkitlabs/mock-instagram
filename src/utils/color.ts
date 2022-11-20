/**
 *
 * @param hex HEX color (ex. #0d168e)
 * @param opacity Opacity that between 0-1
 * @returns r g b that is range 0-255
 */
export const hexToRgba = (hex: string, opacity = 1): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    throw new Error(`Can not convert ${hex} to RGB`)
  }

  return `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${opacity})`
}
