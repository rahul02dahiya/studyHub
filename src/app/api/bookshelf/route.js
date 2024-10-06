// src/app/api/bookshelf/route.js
export async function GET(request) {
    const bookshelf = [
      { src: '/tile/colorBook.webp', title: 'Color Books', price: 'Rs.99 /-', id: 'color-bookshelf' },
      { src: '/tile/globeBook.webp', title: 'Globe Books', price: 'Rs.99 /-', id: 'globe-bookshelf' },
      { src: '/tile/handBook.webp', title: 'Hand Books', price: 'Rs.99 /-', id: 'hand-bookshelf' },
      { src: '/tile/peaceBook.webp', title: 'Peace Books', price: 'Rs.99 /-', id: 'peace-bookshelf' },
      { src: '/tile/pileOfBook.webp', title: 'Pile Of Books', price: 'Rs.99 /-', id: 'pile-of-bookshelf' },
    ];
  
    return new Response(JSON.stringify(bookshelf), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  