class Sneakers {
  constructor(
    id,
    categoryIds,
    title,
    description,
    price,
    size,
    imageUrl
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.description = description;
    this.price = price;
    this.size = size;
    this.imageUrl = imageUrl;
  }
}

export default Sneakers;
