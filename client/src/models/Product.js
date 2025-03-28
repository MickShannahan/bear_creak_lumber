

export class Product {
  constructor(data) {
    this.id = data.product_id
    this.created = data.product_created
    this.modified = data.product_modified
    this.lastPurchase = data.product_last_purchase
    this.categoryId = data.product_category_id
    this.size = data.product_size
    this.species = data.product_species
    this.grade = data.product_grade
    this.description = data.product_description
    this.isInventory = data.product_is_inventory
    this.wtPerMBF = data.product_wt_per_mbf
    this.lfPerBF = data.product_lf_per_bf
    this.incomingPrice = data.product_incoming_price
    this.isActive = data.product_is_active
    this.admCategoryId = data.product_adm_category_id
  }

  static get tableColumnsView() {
    return ['species', 'size', 'grade', 'description', 'incomingPrice']
  }
}