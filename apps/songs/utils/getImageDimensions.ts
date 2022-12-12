export const getImageDimensions = (aspectRatio: string) => {
  const [width, height] = aspectRatio.split(':');
  return {
    width: parseFloat(width),
    height: parseFloat(height),
  };
};
