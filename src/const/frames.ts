interface framesI {
    id:string
    path:string
}
export const FRAMES: framesI[] = Array.from({ length: 150 }, (_, index) => {
    const frameNumber = (index + 1).toString().padStart(3, '0'); // Formatear a tres dígitos
    return {
      id: frameNumber,
      path: `/video-humanoid/ezgif-frame-${frameNumber}.jpg`,
    };
  });