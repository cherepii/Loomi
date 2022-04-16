export default class LapiService {
  data = [
    {
      title: 'RRRelicate knitted shorts',
      discount: 12,
      id: 1,
      price: 28.99,
      imagesPerView: [ // should be no more than 4 images
        "short.png",
        "dress.png",
        "short.png",
        "dress.png"
      ],
      code: '5DG1345',
      supported_sizes: [
        "xs", "s"
      ],
      color: 'Pink',
      product_details:'X Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "165cm/5'5",
      category: 'shorts',
      gender: 'man'
    },
    {
      title: 'DDDelicate knitted shorts',
      id: 2,
      price: 28.99,
      imagesPerView: [
        "short.png",
        "dress.png"
      ],
      code: '5DG1345',
      sizes: [
        "xs", "s"
      ],
      color: 'pink',
      product_details:'A Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "165cm/5'5",
      category: 'shorts',
      gender: 'woman'
    },
    {
      title: 'AAAGathered dress',
      id: 3,
      price: 22.99,
      imagesPerView: [
        "dress.png",
        "short.png"
      ],
      code: '5DG1GD24445',
      supported_sizes: [
        "xs", "s", "m", "l"
      ],
      color: 'red',
      product_details:'G Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "115cm/5'5",
      category: 'bodysuit',
      gender: 'woman'
    },
    {
      title: 'WWWGathered dress',
      id: 4,
      price: 22.99,
      imagesPerView: [
        "dress.png",
        "short.png"
      ],
      code: '5DG1GD24445',
      supported_sizes: [
        "xs", "s", "m", "l"
      ],
      color: 'blue',
      product_details:'E Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "115cm/5'5",
      category: 'bodysuit',
      gender: 'man'
    },
    {
      title: 'LLLDelicate knitted shorts',
      discount: 15,
      id: 5,
      price: 28.99,
      imagesPerView: [
        "short.png",
        "dress.png"
      ],
      code: '5DG1345',
      supported_sizes: [
        "xs", "s"
      ],
      color: 'blue',
      product_details:'M Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "165cm/5'5",
      category: 'shorts',
      gender: 'woman'
    },
    {
      title: 'Delicate knitted shorts',
      discount: 15,
      id: 7,
      price: 28.99,
      imagesPerView: [
        "short.png",
        "dress.png"
      ],
      code: '5DG1345',
      supported_sizes: [
        "xs", "s"
      ],
      color: 'pink',
      product_details:'Z Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "165cm/5'5",
      category: 'blouses and shirts',
      gender: 'man'
    },
    {
      title: 'Cool jeans for walking',
      id: 8,
      price: 21.99,
      imagesPerView: [
        "dress.png",
        "short.png"
      ],
      code: '65SG22345',
      supported_sizes: [
        "xs", "l"
      ],
      color: 'red',
      product_details:'B Mini dress with gather at the sides. Button fastening and slightly dropped shoulder line. Wide sleeves with gathered cuffs. Vertical panels and gather in combination with voluminous sleeves visually adjust the silhouette, making it more graceful',
      height: "165cm/5'5",
      category: 'jeans',
      gender: 'man'
    },
  ]

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1200)
    })
  }
}