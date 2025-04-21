describe('Image Route', () => {
  it('should return send an error message if provided invalid query params', async () => {
    const response = await fetch(
      'http://localhost:3000/api/images?filename=invalid&width=invalid&height=invalid',
    );
    expect(response.status).toBe(400);
  });

  it('should return 200 status and a resized image if query params are valid', async () => {
    const response = await fetch(
      'http://localhost:3000/api/images?filename=kikuno&width=400&height=400',
    );
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('image/jpeg');
    const buffer = await response.blob();
    const arrayBuffer = await buffer.arrayBuffer();
    const resizedImage = new Uint8Array(arrayBuffer);
    expect(resizedImage.length).toBeGreaterThan(0);
  });
});
