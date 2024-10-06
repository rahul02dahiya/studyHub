export async function GET(request) {
    const cards = [
        { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 },
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type1'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type2'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type3'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type4'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type5'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type6'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type7'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type8'},
                            { src: '/tile/colorBook.webp', title: 'Color Books', price: 99 , id: 'book-type9'},
    ];


return new Response(JSON.stringify(cards), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

}